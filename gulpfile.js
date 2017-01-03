//Gulp task packages
var gulp = require('gulp');
const imagemin = require('gulp-imagemin');


//Node Packages
var del = require('del');
var runSequence = require('run-sequence');
var path = require('path');

gulp.task('clean:imagemin', function() {
    del('/img');
    del('/views/images');
});

/* Watch task */
gulp.task('default', function(cb) {
    gulp.watch(config.sassFileSources, ['build']);
});

gulp.task('imagemin', ['clean:imagemin'], function() {
    gulp.src('./src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./img'))
    gulp.src('./src/views/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./views/images'))
});