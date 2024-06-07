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
  entryPoints: [path.resolve(__dirname, "../exe-src/start.js")]
})
