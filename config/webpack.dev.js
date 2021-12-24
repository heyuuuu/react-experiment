const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
	mode: "development",
	entry: ["./src/index.tsx"],
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
		alias: {
			"@": path.join(__dirname, "../src")
		}
	},
	module: {
		rules: [
			{
				test: /\.tsx$/,
				loader: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, {
					loader: "css-loader",
					options: {
						modules: {
							auto: /\.module\.(css|less|scss)$/
						}
					}
				}],
				exclude: /node_modules/,
			}
		]
	},
	plugins: [
		new ReactRefreshWebpackPlugin(),
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({
			publicPath: "/",
			template: "./public/index.html",
			inject: "body"
		})
	],
	devServer: {
		allowedHosts: "all",
		port: 9000,
		hot: true
	},
}