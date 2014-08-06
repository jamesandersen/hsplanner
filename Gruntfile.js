module.exports = function (grunt) {
    var rewriteRulesSnippet = require('grunt-connect-rewrite/lib/utils').rewriteRequest;
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        secrets: grunt.file.readJSON('client_secret.json'),
        mkdir: {
            all: {
                options: {
                    create: ['./<%= pkg.buildDir %>/js']
                },
            },
        },
        'string-replace': {
            client_auth: {
                files: {
                    'src/scripts/app.js': 'src/scripts/main.js',
                    'src/index_temp.html': 'src/index.html'
                },
                options: {
                    replacements: [{
                        pattern: /<!-- @secret (.*?) -->/ig,
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
                dest: '<%= pkg.buildDir %>/index.html',
            },
            views: {
                src: 'src/views/*',
                dest: '<%= pkg.buildDir %>/views/',
            },
            media: {
                src: 'src/media/*',
                dest: '<%= pkg.buildDir %>/media/',
            },
        },
        clean: {
            secrets: ["src/scripts/app.js", "src/index_temp.html"]
        },
        jshint: {
            all: ['Gruntfile.js', 'src/scripts/**/*.js', 'test/**/*.js']
        },
        run: {
            browserify_lib: {
                exec: 'browserify ./src/scripts/noop.js --require angular -p [minifyify --map libs.map.json --output <%= pkg.buildDir %>/js/libs.map.json --minify false] > ./<%= pkg.buildDir %>/js/libs.js'
            },
            browserify_app: {
                exec: 'browserify ./src/scripts/app.js --external angular -d -p [minifyify --map app.map.json --output <%= pkg.buildDir %>/js/app.map.json] > <%= pkg.buildDir %>/js/app.js',
            },
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
                    livereload: true,
                },
            },
            css: {
                files: ['src/styles/**/*.less'],
                tasks: ['less'],
                options: {
                    livereload: true,
                },
            },
            html: {
                files: ['src/index.html', 'src/views/**/*.html'],
                tasks: ['string-replace', 'copy', 'clean'],
                options: {
                    livereload: true,
                },
            }
        },
        connect: {
            rules: [
                // Internal rewrite
                {
                    from: '^/oauth2callback',
                    to: '/index.html'
                }
            ],
            server: {
                options: {
                    port: 9001,
                    base: 'dist',
                    livereload: true,
                    middleware: function (connect, options) {
                        var middlewares = [];

                        // RewriteRules support
                        middlewares.push(rewriteRulesSnippet);

                        if (!Array.isArray(options.base)) {
                            options.base = [options.base];
                        }

                        var directory = options.directory || options.base[options.base.length - 1];
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
    grunt.loadNpmTasks('grunt-string-replace');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-run');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Default task(s).
    grunt.registerTask('build-js-lib', ['mkdir', 'run:browserify_lib']);
    grunt.registerTask('build-js-app', ['mkdir', 'string-replace', 'run:browserify_app', 'clean:secrets']);
    grunt.registerTask('build-html', ['mkdir', 'string-replace', 'copy', 'clean:secrets']);
    grunt.registerTask('build', ['build-html', 'build-js-lib', 'build-js-app', 'less']);

    grunt.registerTask('default', ['build', 'configureRewriteRules', 'connect', 'watch']);



};