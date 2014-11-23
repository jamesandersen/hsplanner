/*jslint es5: true */
/*global module: false, require: false,  es5: true */
module.exports = function (grunt) {
    'use strict';
    var rewriteRulesSnippet = require('grunt-connect-rewrite/lib/utils').rewriteRequest,
        appFiles = [
            'src/es6_polyfills.js',
            'src/components/common/**/*.js',
            'src/components/auth/**/*.js',
            'src/components/schedule/**/*.js',
            'src/app_.js',
            'src/components/mock/**/*.js',
            '!src/**/*_tests.js',
        ];

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        secrets: grunt.file.readJSON('client_secret.json'),
        mkdir: {
            all: {
                options: {
                    create: ['./<%= pkg.buildDir %>/js']
                }
            }
        },
        'string-replace': {
            client_auth: {
                files: {
                    'src/app_.js': 'src/app.js',
                    'src/index_.html': 'src/index.html'
                },
                options: {
                    replacements: [{
                        pattern: /<!-- @secret (\w*?) -->/ig,
                        replacement: function (match, p1, offset, string) {
                            return grunt.config.get('secrets').web[p1];
                        }
                    }]
                }
            }
        },
        copy: {
            index: {
                src: 'src/index_.html',
                dest: '<%= pkg.buildDir %>/index.html'
            },
            partials: {
                expand: true,
                cwd: 'src/components/',
                src: ['**/*.html'],
                dest: '<%= pkg.buildDir %>/components/'
            },
            fonts: {
                expand: true,
                cwd: 'bower_components/fontawesome/fonts/',
                src: ['**'],
                dest: '<%= pkg.buildDir %>/fonts/'
            },
        },
        clean: {
            secrets: ["src/app_.js", "src/index_.html"]
        },
        jshint: {
            all: ['Gruntfile.js', 'src/**/*.js']
        },
        jasmine: {
            customTemplate: {
                src: appFiles,
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
        uglify: {
            lib_dev: {
                options: {
                    sourceMap: false,
                    mangle: false,
                    compress: false
                },
                files: {
                    '<%= pkg.buildDir %>/libs.js': [
                        'bower_components/moment/moment.js',
                        'bower_components/angular/angular.js',
                        'bower_components/angular-route/angular-route.js',
                        'bower_components/angular-animate/angular-animate.js',
                        'bower_components/angular-touch/angular-touch.js',
                        'bower_components/angular-resource/angular-resource.js',

                        // TODO: figure out how to conditionally include this
                        'bower_components/angular-mocks/angular-mocks.js',
                        'bower_components/angular-bootstrap/ui-bootstrap.js',
                        'bower_components/angular-bootstrap/ui-bootstrap-tpls.js'
                    ]
                }
            },
            dev: {
                options: {
                    sourceMap: false,
                    beautify: true,
                    mangle: false,
                    compress: false
                },
                files: {
                    '<%= pkg.buildDir %>/app.js': appFiles
                }
            }
        },
        less: {
            development: {
                files: {
                    '<%= pkg.buildDir %>/styles.css': 'src/styles.less'
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
            js: {
                files: ['src/**/*.js', '!src/app_.js'],
                tasks: ['build-js-app']
            },
            css: {
                files: ['src/**/*.less'],
                tasks: ['less']
            },
            html: {
                files: ['src/**/*.html'],
                tasks: ['build-html']
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
        }
    });

    // Load grunt plugins
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-connect-rewrite');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-string-replace');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    // Default task(s).
    grunt.registerTask('build-js-lib', ['mkdir', 'uglify:lib_dev']);
    grunt.registerTask('build-js-app', ['mkdir', 'string-replace', 'uglify:dev', 'clean:secrets']);
    grunt.registerTask('build-html', ['mkdir', 'string-replace', 'copy', 'clean:secrets']);
    grunt.registerTask('build', ['build-html', 'build-js-lib', 'build-js-app', 'less']);

    grunt.registerTask('default', ['build', 'configureRewriteRules', 'connect', 'watch']);



};
