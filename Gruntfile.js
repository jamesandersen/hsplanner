/*jslint es5: true */
/*global module: false, require: false,  es5: true */
module.exports = function (grunt) {
    'use strict';
    var rewriteRulesSnippet = require('grunt-connect-rewrite/lib/utils').rewriteRequest,
        webpack = require("webpack"),
        webpackConfig = require("./webpack.config.js"),
        keyPath = __dirname + '/cert/server.key',
        certPath = __dirname + '/cert/server.crt',
        caPath = __dirname + '/cert/ca.crt';


    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: ['Gruntfile.js', 'src/**/*.js']
        },
        watch: {
            options: {
                livereload: {
                    port: 35729,
                    key: grunt.file.read(keyPath),
                    cert: grunt.file.read(certPath)
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
                {from: '^/hsplanner/(.*)$', to: '/$1'},
                // Internal rewrite
                {
                    from: '^/(main|login|profile|event-detail)',
                    to: '/index.html'
                }
            ],
            server: {
                options: {
                    protocol: 'https',
                    key: grunt.file.read(keyPath).toString(),
                    cert: grunt.file.read(certPath).toString(),
                    ca: grunt.file.read(caPath).toString(),
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
		},
        nodemon: {
            json_server: {
                script: 'services/server.js',
                options: {
                    args: ['-key=' + keyPath, '-cert=' + certPath]
                }
            }
        },
        concurrent: {
            dev: ['dev', 'nodemon:json_server'],
            prod: ['prod_build', 'nodemon:json_server'],
            options: {
                logConcurrentOutput: true
            }
        }
    });

    // Load grunt plugins
    require("matchdep").filterAll("grunt-*").forEach(grunt.loadNpmTasks);

    // Default task(s).
    grunt.registerTask('dev', ['webpack:development', 'configureRewriteRules', 'connect', 'watch']);
    grunt.registerTask('prod_build', ['webpack:production', 'configureRewriteRules', 'connect', 'watch']);
    grunt.registerTask('default', ['concurrent:dev']);
    grunt.registerTask('prod', ['concurrent:prod']);
};