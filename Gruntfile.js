/*jslint es5: true */
/*global module: false, require: false,  es5: true */
module.exports = function (grunt) {
    'use strict';
    var rewriteRulesSnippet = require('grunt-connect-rewrite/lib/utils').rewriteRequest,
        appFiles = [
            'src/scripts/es6_polyfills.js',
            'src/scripts/common/**/*.js',
            'src/scripts/auth/**/*.js',
            'src/scripts/schedule/**/*.js',
            'src/scripts/app_.js'
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
                    'src/scripts/app_.js': 'src/scripts/app.js',
                    'src/index_temp.html': 'src/index.html'
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
                src: 'src/index_temp.html',
                dest: '<%= pkg.buildDir %>/index.html'
            },
            views: {
                expand: true,
                cwd: 'src/views/',
                src: ['**'],
                dest: '<%= pkg.buildDir %>/views/'
            },
            fonts: {
                expand: true,
                cwd: 'bower_components/fontawesome/fonts/',
                src: ['**'],
                dest: '<%= pkg.buildDir %>/fonts/'
            },
            media: {
                expand: true,
                cwd: 'src/media/',
                src: ['**'],
                dest: '<%= pkg.buildDir %>/media/'
            }
        },
        clean: {
            secrets: ["src/scripts/app_.js", "src/index_temp.html"]
        },
        jshint: {
            all: ['Gruntfile.js', 'src/scripts/**/*.js', 'test/**/*.js']
        },
        jasmine: {
            customTemplate: {
                src: appFiles,
                options: {
                    specs: 'src/tests/*_tests.js',
                    helpers: 'src/tests/*_helper.js',
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
                    '<%= pkg.buildDir %>/js/libs.js': [
                        'bower_components/moment/moment.js',
                        'bower_components/angular/angular.js',
                        'bower_components/angular-route/angular-route.js',
                        'bower_components/angular-animate/angular-animate.js',
                        'bower_components/angular-touch/angular-touch.js',
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
                    '<%= pkg.buildDir %>/js/app.js': appFiles
                }
            }
        },
        less: {
            development: {
                files: {
                    '<%= pkg.buildDir %>/css/styles.css': 'src/styles/styles.less'
                }
            }
        },
        watch: {
            js: {
                files: ['src/scripts/**/*.js', '!src/scripts/app.js'],
                tasks: ['build-js-app'],
                options: {
                    livereload: true
                }
            },
            css: {
                files: ['src/styles/**/*.less'],
                tasks: ['less'],
                options: {
                    livereload: true
                }
            },
            html: {
                files: ['src/index.html', 'src/views/*.html', 'src/views/**/*.html'],
                tasks: ['build-html'],
                options: {
                    livereload: true
                }
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
