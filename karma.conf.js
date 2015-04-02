/**
 * Created by jandersen on 3/25/15.
 */
var webpack = require('webpack');
var path = require("path");
var bowerComponentsPath = path.join(__dirname, 'bower_components');

module.exports = function (config) {
    config.set({
        browsers: [ 'Chrome' ], //run in Chrome
        singleRun: true, //just run once by default
        frameworks: [ 'jasmine' ], //use the mocha test framework
        files: [
            'tests.webpack.js' //just load this file
        ],
        preprocessors: {
            'tests.webpack.js': [ 'webpack', 'sourcemap' ] //preprocess with webpack and our sourcemap loader
        },
        reporters: [ 'dots' ], //report results in this format
        webpack: { //kind of a copy of your webpack config
            devtool: 'inline-source-map', //just do inline source maps instead of the default
            resolve: {
                alias: {
                    angular: 'angular/angular.js',
                    "angular-route": 'angular-route/angular-route.min.js',
                    "angular-animate": 'angular-animate/angular-animate.min.js',
                    "angular-touch": 'angular-touch/angular-touch.min.js',
                    "angular-resource": 'angular-resource/angular-resource.min.js',
                    "angular-bootstrap": 'angular-bootstrap/ui-bootstrap-tpls.min.js',
                    "angular-mocks": 'angular-mocks/angular-mocks.js',
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
                noParse: [/angular(\.min|-)/, /moment.min.js/],
                loaders: [
                    { test: /\.js$/, loader: 'babel-loader' },
                    { test: /[\/\\]angular\.js$/, loader: 'exports?window.angular' },
                    { test: /\.html$/,    loader: "file?name=[path][name].[ext]" }, // copies the files over
                ]
            },
            plugins: [
                new webpack.ProvidePlugin({
                    // when 'angular' is used from the global namespace
                    // this pluglin will automatically require the angular module
                    angular: "angular",
                    moment: "moment"
                })
            ]
        },
        webpackServer: {
            noInfo: true //please don't spam the console when running in karma!
        }
    });
};
