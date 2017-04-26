var clean = require('gulp-clean');

module.exports = function(gulp, config) {
    'use strict';

    var _output = config.dist.root_dir;

    return function(done) {

        return gulp.src(_output)
            .pipe(clean());
    };
};
