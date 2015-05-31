var config = {
    pkg:  require('./package.json'),
    app:  'app',
    dist: 'dist'
};

module.exports = function (grunt) {
    grunt.initConfig({
        config: config,
        pkg:    config.pkg,

        clean: ['<%= config.dist %>'],

        copy: {
            main: {
                files: [
                    {
                        "expand": true,
                        "src": [
                            "LICENSE",
                            "README.md"
                        ],
                        "dest": "<%= config.dist %>/",
                        "filter": "isFile"
                    },
                    {
                        "expand": false,
                        "src": "app/index.html",
                        "dest": "<%= config.dist %>/index.html"
                    }
                ]
            }
        },

        useminPrepare: {
            html: 'app/index.html'
        },

        usemin: {
            html: ['<%= config.dist %>/index.html']
        },

        uglify: {
            options: {
                report: 'min',
                mangle: false
            },
            dist: {
                files: {
                    '<%= config.dist %>/js/orangecms.min.js': [
                        'node_modules/angular/angular.js',
                        'node_modules/angular-resource/angular-resource.js',
                        'node_modules/jquery/dist/jquery.min.js',
                        'node_modules/bootstrap/dist/js/bootstrap.min.js',
                        'app/js/**/*.js',
                        '!app/js/**/*Spec.js'
                    ]
                }
            }
        },

        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    '<%= config.dist %>/css/orangecms.min.css': [
                        'node_modules/bootstrap/dist/css/bootstrap.min.css',
                        'app/css/style.css'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-usemin');

    grunt.registerTask('default', [
        'clean',
        'copy',
        'uglify',
        'cssmin',
        'usemin'
    ]);

    grunt.registerTask('dist', [
        'clean',
        'copy',
        'uglify',
        'cssmin',
        'usemin'
    ]);
/*
    grunt.registerTask('release', [
        'clean',
        'copy',
        'uglify',
        'cssmin',
        'usemin',
        'compress'
    ]);
*/
};
