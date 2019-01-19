const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const getTask =require('./build/util.js');

gulp.task('script', getTask('script'));
gulp.task('less', getTask('less'));
gulp.task('sass', getTask('sass'));
gulp.task('html', getTask('html'));
gulp.task('image', getTask('image'));
gulp.task('concatjs', getTask('concatjs'));

gulp.task('default', gulp.series(getTask('init'), gulp.parallel('script', 'sass', 'less', 'html', 'image')));

gulp.task('dev', gulp.series(getTask('init'), gulp.parallel('script', 'sass', 'less', 'html', 'image'), function (done) {
    browserSync.init({
        server: 'dist'
    });

    gulp.watch('src/**/*.html', getTask('html')).on('change', reload);
    gulp.watch('src/image/**/*', getTask('image')).on('change', reload);
    gulp.watch('src/js/**/*.js', getTask('script')).on('change', reload);
    gulp.watch('src/css/**/*.scss', getTask('sass')).on('change', reload);
    gulp.watch('src/css/**/*.less', getTask('less')).on('change', reload);

    done();
}));
