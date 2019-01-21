module.exports = function (gulp, plugins, options) {
    const browserSync = require('browser-sync');

    return function (done) {
        gulp.src(['src/js/**/*.js'])
            .pipe(plugins.plumber())
            .pipe(plugins.changed('dist/js'))
            .pipe(plugins.babel({
                presets: ["@babel/env"],
                plugins: ["@babel/plugin-transform-runtime"]
            }))
            .pipe(plugins.if(options.env === 'production', plugins.uglify()))
            .pipe(gulp.dest('dist/js'))
            .pipe(browserSync.reload({
                stream: true
            }));

        done();
    };
};