var path = require("path");
var webpack = require("webpack");

var nodeModulesPath = path.join(__dirname, 'node_modules');
var bowerComponentsPath = path.join(__dirname, 'bower_components/fontawesome/less');

module.exports = {
    context: __dirname + "/src",
	cache: true,
	entry: {
		//jquery: "./app/jquery",
		//bootstrap: ["!bootstrap-webpack!./app/bootstrap/bootstrap.config.js", "./app/bootstrap"],
		//react: "./app/react"
        app: "./main.js"
	},
	output: {
		path: path.join(__dirname, "/dist"),
		publicPath: "dist/",
		filename: "[name].js",
		chunkFilename: "[chunkhash].js"
	},
    resolve: {
        root: [nodeModulesPath, bowerComponentsPath]
    },
	module: {
		loaders: [
			// required to write "require('./style.css')"
			{ test: /\.less$/,    loader: "style-loader!css-loader!less-loader" },

			// required for bootstrap icons
			{ test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/,   loader: "url-loader?prefix=font/&limit=5000&mimetype=application/font-woff" },
			{ test: /\.ttf(\?v=[0-9]\.[0-9]\.[0-9])?$/,    loader: "file-loader?prefix=font/" },
			{ test: /\.eot(\?v=[0-9]\.[0-9]\.[0-9])?$/,    loader: "file-loader?prefix=font/" },
			{ test: /\.svg(\?v=[0-9]\.[0-9]\.[0-9])?$/,    loader: "file-loader?prefix=font/" },

			// required for react jsx
			{ test: /\.js$/,    loader: "jsx-loader" },
			{ test: /\.jsx$/,   loader: "jsx-loader?insertPragma=React.DOM" },
		]
	},
	resolve: {
		alias: {
			// Bind version of jquery
			jquery: "jquery-2.0.3",

			// Bind version of jquery-ui
			"jquery-ui": "jquery-ui-1.10.3",

			// jquery-ui doesn't contain a index file
			// bind module to the complete module
			"jquery-ui-1.10.3$": "jquery-ui-1.10.3/ui/jquery-ui.js",
		}
	},
	plugins: [
		new webpack.ProvidePlugin({
			// Automtically detect jQuery and $ as free var in modules
			// and inject the jquery library
			// This is required by many jquery plugins
			jQuery: "jquery",
			$: "jquery"
		})
	]
};