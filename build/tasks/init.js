module.exports = function (gulp, plugins, options) {
    const fs = require('fs');

    var emptyDir = function (fileUrl) {
        var files = fs.readdirSync(fileUrl);

        if (files.length === 0 && fileUrl !== 'dist') {
            fs.rmdirSync(fileUrl);
        }

        files.forEach(function (file) {
            var stats = fs.statSync(fileUrl + '/' + file);

            if (stats.isDirectory()) {
                emptyDir(fileUrl+'/'+file);
            } else {
                fs.unlinkSync(fileUrl + '/' + file);
            }
        });
     }

    return function (done) {
        emptyDir('dist');

        done();
    };
};