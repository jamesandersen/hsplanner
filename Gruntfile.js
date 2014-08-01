module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            index: {
                src: 'src/index.html',
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
        jshint: {
            all: ['Gruntfile.js', 'src/scripts/**/*.js', 'test/**/*.js']
        },
        mkdir: {
            all: {
                options: {
                    create: ['./<%= pkg.buildDir %>/js']
                },
            },
        },
        run: {
            browserify_lib: {
                exec: 'browserify ./src/scripts/noop.js --require angular -p [minifyify --map libs.map.json --output <%= pkg.buildDir %>/js/libs.map.json] > ./<%= pkg.buildDir %>/js/libs.js'
            },
            browserify_app: {
                exec: 'browserify ./src/scripts/main.js --external angular -d -p [minifyify --map app.map.json --output <%= pkg.buildDir %>/js/app.map.json] > <%= pkg.buildDir %>/js/app.js',
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
                files: ['src/scripts/**/*.js'],
                tasks: ['run:browserify_app'],
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
                tasks: ['copy'],
                options: {
                    livereload: true,
                },
            }
        },
        connect: {
            server: {
                options: {
                    port: 9001,
                    base: 'dist',
                    livereload: true
                }
            }
        }
    });

    // Load grunt plugins
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-run');
    grunt.loadNpmTasks('grunt-mkdir');

    // Default task(s).
    grunt.registerTask('default', ['build', 'connect', 'watch']);
    grunt.registerTask('build', ['mkdir', 'run', 'less', 'copy']);

};