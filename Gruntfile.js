/*jslint es5: true */
/*global module: false, require: false,  es5: true */
module.exports = function (grunt) {
    'use strict';
    var rewriteRulesSnippet = require('grunt-connect-rewrite/lib/utils').rewriteRequest;
	var webpack = require("webpack");
	var webpackConfig = require("./webpack.config.js");

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: ['Gruntfile.js', 'src/**/*.js']
        },
        jasmine: {
            customTemplate: {
                src: [
                    'src/es6_polyfills.js',
                    'src/components/common/**/*.js',
                    'src/components/auth/**/*.js',
                    'src/components/schedule/**/*.js',
                    'src/app.js',
                    'src/components/mock/**/*.js',
                    '!src/**/*_tests.js',
                ],
                options: {
                    specs: 'src/**/*_tests.js',
                    helpers: 'src/**/*_helper.js',
                    vendor: [
                        "bower_components/angular/angular.js",
                        "bower_components/angular-mocks/angular-mocks.js"
                    ]
                }
            }
        },
        watch: {
            options: {
                livereload: {
                    port: 35729,
                    key: grunt.file.read('node_modules/grunt-contrib-connect/tasks/certs/server.key'),
                    cert: grunt.file.read('node_modules/grunt-contrib-connect/tasks/certs/server.crt')
                    // you can pass in any other options you'd like to the https server, as listed here: http://nodejs.org/api/tls.html#tls_tls_createserver_options_secureconnectionlistener
                }
            },
            app: {
                files: ['src/**/*.js', 'src/**/*.less', 'src/**/*.html'],
                tasks: ['webpack:development']
            }
        },
        connect: {
            rules: [
                // Internal rewrite
                {
                    from: '^/(main|login|profile|event-detail)',
                    to: '/index.html'
                }
            ],
            server: {
                options: {
                    protocol: 'https',
                    hostname: '*',
                    port: 9001,
                    base: 'dist',
                    livereload: true,
                    middleware: function (connect, options) {
                        var middlewares = [],
                            directory;

                        // RewriteRules support
                        middlewares.push(rewriteRulesSnippet);

                        if (!Array.isArray(options.base)) {
                            options.base = [options.base];
                        }

                        directory = options.directory || options.base[options.base.length - 1];
                        options.base.forEach(function (base) {
                            // Serve static files.
                            middlewares.push(connect.static(base));
                        });

                        // Make directory browse-able.
                        middlewares.push(connect.directory(directory));

                        return middlewares;
                    }
                }
            }
        },
        webpack: {
			options: webpackConfig,
            development: {
                devtool: "sourcemap",
                plugins: [
                    new webpack.DefinePlugin({
                        DEBUG: true,
                        PRODUCTION: false
                    })
                ]
            },
            production: {
                plugins: [
                    new webpack.DefinePlugin({
                        DEBUG: false,
                        PRODUCTION: true
                    }),
                    new webpack.optimize.DedupePlugin(),
                    new webpack.optimize.UglifyJsPlugin()
                ]
            }
		}
    });

    // Load grunt plugins
    require("matchdep").filterAll("grunt-*").forEach(grunt.loadNpmTasks);

    // Default task(s).
    grunt.registerTask('default', ['webpack:development', 'configureRewriteRules', 'connect', 'watch']);
    grunt.registerTask('prod', ['webpack:production', 'configureRewriteRules', 'connect']);
};