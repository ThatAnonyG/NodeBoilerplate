const { join, resolve } = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
	entry: join(__dirname, "src", "index.ts"),
	target: "node",
	mode: process.env.NODE_ENV,
	output: {
		path: resolve(__dirname, "dist"),
		filename: "bundle.js",
	},
	watch: process.env.NODE_ENV === "development",
	resolve: {
		extensions: [".ts", ".js"],
	},
	externals: [nodeExternals()],
	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				use: {
					loader: "ts-loader",
				},
			},
		],
	},
};
