var path = require("path");
var webpack = require("webpack");

var nodeModulesPath = path.join(__dirname, 'node_modules');
var bowerComponentsPath = path.join(__dirname, 'bower_components');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var cssTextPlugin = new ExtractTextPlugin("[name].css");
var htmlTextPlugin = new ExtractTextPlugin("[name].html");

module.exports = {
    //context: __dirname + "/src",
	cache: true,
	entry: {
		//bootstrap: ["!bootstrap-webpack!./app/bootstrap/bootstrap.config.js", "./app/bootstrap"],
		//react: "./app/react"
        index: "./src/index.html",
        libs: ["angular", "moment"],
        app: [
            "./src/es6_polyfills.js",
            "imports?common,auth,schedule!./src/app.js" // import dependent modules
        ],
        styles: ["./src/styles.less"]
	},
	output: {
		path: path.join(__dirname, "/dist2"),
		publicPath: "dist2/",
		filename: "[name].js",
		chunkFilename: "[chunkhash].js"
	},
    resolve: {
        alias: {
            angular: 'angular/angular.min.js',

            // need to have the alias setup for when webpack recurses to locale files which require "moment"
            // TODO: Can't seem to use minified version
            moment: 'moment/moment.js',

            // app modules
            auth: './components/auth/_auth.js',
            common: './components/common/_common.js',
            schedule: './components/schedule/_schedule.js',
        },
        root: [bowerComponentsPath],

        // This doesn't seem to be used at all... don't know why
        modulesDirectories: ['bower_components']
    },
	module: {
        noParse: ['angular.min.js', 'moment.min.js'],
		loaders: [
            // required to write "require('./style.css')"

			{ test: /\.html$/,    loader: "html-loader" },
            { test: /index.html$/,    loader: "file?name=[name].[ext]" },

            // required to write "require('./style.css')"
			{ test: /\.less$/,    loader: cssTextPlugin.extract("style-loader", "css-loader!less-loader") },

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
	plugins: [
		new webpack.ProvidePlugin({
			// when 'angular' is used from the global namespace
            // this pluglin will automatically require the angular module
            angular: "angular"
		}),
        new webpack.ContextReplacementPlugin(/moment[\\\/]locale$/, /^\.\/(es|pt)$/),
        new webpack.optimize.CommonsChunkPlugin({
          name: "libs",

          // filename: "vendor.js"
          // (Give the chunk a different name)

          minChunks: Infinity
          // (with more entries, this ensures that no other module
          //  goes into the vendor chunk)
        }),

        // output the text from a loader directly to a file (rather than wrapping as a js module)
        cssTextPlugin,
        htmlTextPlugin
	]
};
