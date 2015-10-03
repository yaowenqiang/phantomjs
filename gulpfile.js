//npm install -g gulp
//npm install --save-dev gulp-shell
//load gulp
var gulp = require('gulp');
// load gulp-shell
// https://github.com/sun-zheng-an/gulp-shell
var shell = require('gulp-shell' );

// configure test command
gulp.task{'test',function() {
    return gulp.src( specFiles ).pipe( jasminPhyantomJs() );
}}

// configure phantomjs command
gulp.task('phantomjsj',shell.task(
    [
        'phantomjs system_api.js jack'
    ]
));

// set phantomjs task as default
gulp.task( 'default',[ 'phantomjs' ] );
