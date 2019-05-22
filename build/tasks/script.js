module.exports = function (gulp, plugins, options) {
    const browserSync = require('browser-sync');

    // 使用.babelrc配置
    // const babelConfig = {
    //     presets: ['@babel/env'],
    //     plugins: ['@babel/plugin-transform-runtime'],
    //     ignore: [
    //       'src/js/lib/**/*.js'
    //     ]
    // }

    // eslint 必须放到 babel 前
    // babel 排除 lib 目录
    return function (done) {
        gulp.src(['src/js/**/*.js'])
            .pipe(plugins.plumber())
            .pipe(plugins.changed('dist/js'))
            .pipe(plugins.eslint({
                configFile: '.eslintrc.js'
            }))
            .pipe(plugins.eslint.format())
            .pipe(plugins.eslint.failAfterError())
            .pipe(plugins.babel())
            .pipe(plugins.if(options.env === 'production', plugins.uglify()))
            .pipe(gulp.dest('dist/js'))
            .pipe(browserSync.reload({
                stream: true
            }));

        done();
    };
};