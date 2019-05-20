/*
    残留问题：layout目录不支持动态跟踪变化
 */

module.exports = function (gulp, plugins, options) {
    const browserSync = require('browser-sync').create();
    const reload = browserSync.reload;

    return function (done) {
        gulp.src(['src/**/*.html'])
            .pipe(plugins.plumber("This file has an error: <%= file.relative %>!"))
            .pipe(plugins.changed('dist/'))
            .pipe(plugins.htmlExtend({
                annotations: false,
                verbose: false
            }))
            .pipe(gulp.dest('dist/'))
            .pipe(reload({
                stream: true
            }));

        done();
    };
};