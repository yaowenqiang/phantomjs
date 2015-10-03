//npm install -g grunt-cli
//npm install --save-dev grunt-shell
//Usage: grunt shell
module.exports = function (grunt) {
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        shell: {
            phantomjs: {
                command: 'phantomjs system_api.js jacky.yao'
            }
        },
        //set up tasks
    });
    grunt.loadNpmTasks('grunt-shell');
    grunt.registerTask('default',['shell:phantomjs']);

};
