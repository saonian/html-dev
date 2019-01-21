const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = function (gulp, plugins, options) {
    const browserSync = require('browser-sync');
    const postCssPlugins = [
        autoprefixer({browsers: ['last 1 version']}),
        cssnano()
    ];

    return function (done) {
        gulp.src('src/css/**/*.scss')
            .pipe(plugins.plumber())
            .pipe(plugins.changed('dist/css'))
            .pipe(plugins.sass())
            .pipe(plugins.postcss(postCssPlugins))
            .pipe(plugins.if(options.env === 'production', plugins.minifyCss()))
            .pipe(gulp.dest('dist/css'))
            .pipe(browserSync.reload({
                stream: true
            }));

        done();
    };
};