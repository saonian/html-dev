module.exports = function (gulp, plugins, options) {
    const browserSync = require('browser-sync');
    return function (done) {
        gulp.src('src/image/**/*')
            .pipe(plugins.plumber())
            .pipe(plugins.changed('dist/image'))
            .pipe(plugins.imagemin())
            .pipe(gulp.dest('dist/image'))
            .pipe(browserSync.reload({
                stream: true
            }));

        done();
    };
};