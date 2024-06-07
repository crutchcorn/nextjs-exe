import * as path from "node:path";
import {build} from "esbuild";

build({
  // ESM not supported in SEA yet
  format: "cjs",
  target: 'node2020',
  platform: "node",
  // SEA required to have a single file
  bundle: true,
  outfile: path.resolve(__dirname, "../out/bundle.js"),
  external: [
    // Required for Electron asar hacks
    "original-fs"
  ],
  inject: [
    // DO NOT FLIP THE ORDER, THESE TWO RELY ON ONE-ANOTHER
    path.resolve(__dirname, "../exe-src/inject-asar-fs.ts"),
    path.resolve(__dirname, "../exe-src/inject-asar-binding.ts")
  ],
  plugins: [
    {
      name: "next-compiled-module-resolution",
      setup(build) {
        const resolvedSymbol = Symbol();
        build.onResolve({filter: /./}, async (args) => {
          if (args.kind !== "require-call") return;
          if (args.pluginData === resolvedSymbol) return;

          const resolved = await build.resolve(args.path, {
            kind: args.kind,
            importer: args.importer,
            resolveDir: args.resolveDir,
            pluginData: resolvedSymbol
          })

          if (resolved.errors.length > 0) {
            const second = await build.resolve(args.path, {
              kind: args.kind,
              importer: args.importer,
              resolveDir: path.resolve(__dirname, "../node_modules/next/dist/compiled"),
              pluginData: resolvedSymbol
            })

            if (second.errors.length > 0) {
              return {errors: resolved.errors}
            }

            return second;
          }

          return resolved;
        })
      }
    }
  ],
  entryPoints: [path.resolve(__dirname, "../exe-src/start.js")]
})
