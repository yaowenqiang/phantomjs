//npm install -g grunt-cli
//npm install --save-dev grunt-shell
//npm install --save-dev grunt-contrib-watch
//npm install --save-dev grunt-contrib-jasmine
//Usage: grunt shell
module.exports = function (grunt) {
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        shell: {
            phantomjs: {
                command: 'phantomjs system_api.js jacky.yao'
            }
        },
        //configure jasmine task
        //https://github.com/gruntjs/grunt-contrib-jasmine
        jasmine: {
            pivotal: {
                sec: 'js/src/**/*.js',
                optins: {
                    specs: 'js/spec/*Spec.js'
                }
            }
        },
        // configure file watcher
        // https://github.com/gruntjs/grunt-contrib-watch
        watch: {
            scripts: {
                files: [ 'js/src/**/*.js' ],
                tasks: [ 'jasmine' ],
                options: {
                    spawon: false,
                }
            }
        }
        //set up tasks
    });
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.registerTask('default',['shell:phantomjs']);

};
