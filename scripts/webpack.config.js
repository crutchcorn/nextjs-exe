const path = require("path");

/**
 * @type {import("webpack").Configuration}
 */
module.exports = (env, options) => {
    return {
        mode: options.mode,
        entry: [path.resolve(__dirname, "../exe-src/start.ts")],
        target: "node",
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: "babel-loader",
                    exclude: /node_modules/,
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-typescript",
                            "@babel/preset-react"
                        ],
                        plugins: [
                            "@babel/plugin-syntax-import-attributes"
                        ]
                    }
                },
                {
                    test: /\.node$/,
                    loader: "node-loader",
                },
                {
                    // @vercel/nft attempts to load the license file
                    test: /LICENSE$/i,
                    use: 'raw-loader',
                },
            ],
        },
        resolve: {extensions: [".tsx", ".ts", ".js"]},
        output: {
            filename: "bundle.js",
            path: path.resolve(__dirname, "../out")
        }
    };
};
