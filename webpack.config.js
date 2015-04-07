var path = require("path");
var webpack = require("webpack");

var nodeModulesPath = path.join(__dirname, 'node_modules');
var bowerComponentsPath = path.join(__dirname, 'bower_components');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var StringReplacePlugin = require("string-replace-webpack-plugin");
var cssTextPlugin = new ExtractTextPlugin("[name].css");

var secrets = require('./client_secret.json');

module.exports = {
    context: __dirname + "/src",
	cache: true,
	entry: {
		//bootstrap: ["!bootstrap-webpack!./app/bootstrap/bootstrap.config.js", "./app/bootstrap"],
		//react: "./app/react"
        libs: [
            "angular",
            "angular-route",
            "angular-animate",

            "angular-resource",
            "angular-touch",
            "angular-aria",
            "angular-material",
            "angular-bootstrap",
            "moment"
        ],
        app: [
            "./index.html",
            "./es6_polyfills.js",
            "imports?common,auth,schedule!./app.js" // import dependent modules
        ],
        styles: ["./styles.less"]
	},
	output: {
		path: path.join(__dirname, "/dist"),
		filename: "[name].js",
		chunkFilename: "[chunkhash].js"
	},
    resolve: {
        alias: {
            angular: 'angular/angular.min.js',
            "angular-route": 'angular-route/angular-route.min.js',
            "angular-animate": 'angular-animate/angular-animate.min.js',
            "angular-resource": 'angular-resource/angular-resource.min.js',
            "angular-touch": 'angular-touch/angular-touch.min.js',
            "angular-aria": 'angular-aria/angular-aria.min.js',
            "angular-material": 'angular-material/angular-material.min.js',
            "angular-bootstrap": 'angular-bootstrap/ui-bootstrap-tpls.min.js',
            // need to have the alias setup for when webpack recurses to locale files which require "moment"
            // TODO: Can't seem to use minified version
            moment: 'moment/moment.js',

            // app modules
            auth: './components/auth/_auth.js',
            common: './components/common/_common.js',
            schedule: './components/schedule/_schedule.js'
        },
        root: [bowerComponentsPath],

        // This doesn't seem to be used at all... don't know why
        modulesDirectories: ['bower_components']
    },
	module: {
        noParse: [/angular(\.min|-)/, /moment.min.js/],
		loaders: [
            // required to write "require('./style.css')"


			//{ test: /\.html$/,    loader: "html-loader" }, // turns html into "modules"
			{ test: /\.html$/,    loader: "file?name=[path][name].[ext]" }, // copies the files over
            { test: /index.html$/,    loader: StringReplacePlugin.replace({
                replacements: [
                    {
                        pattern: /<!-- @secret (\w*?) -->/ig,
                        replacement: function (match, p1, offset, string) {
                            return secrets.web[p1];
                        }

                    }
                ]})
            },

            { test: /[\/\\]angular\.min\.js$/, loader: 'exports?window.angular' },

            // required to write "require('./style.css')"
			{ test: /\.less$/,    loader: cssTextPlugin.extract("style-loader", "css-loader!less-loader") },

			// required for bootstrap icons
			{ test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/,   loader: "url-loader?prefix=font/&limit=5000&mimetype=application/font-woff" },
			{ test: /\.ttf(\?v=[0-9]\.[0-9]\.[0-9])?$/,    loader: "file-loader?prefix=font/" },
			{ test: /\.eot(\?v=[0-9]\.[0-9]\.[0-9])?$/,    loader: "file-loader?prefix=font/" },
			{ test: /\.svg(\?v=[0-9]\.[0-9]\.[0-9])?$/,    loader: "file-loader?prefix=font/" },

			// required for react jsx
			{ test: /\.js$/,  exclude: /(node_modules|angular(\.|-))/,  loader: "babel-loader" },
			{ test: /\.jsx$/,   loader: "jsx-loader?insertPragma=React.DOM" },
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			// when 'angular' is used from the global namespace
            // this pluglin will automatically require the angular module
            angular: "angular",
            moment: "moment"
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
        new StringReplacePlugin()
	]
};
