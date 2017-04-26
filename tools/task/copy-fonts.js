module.exports = function(gulp, config) {
    'use strict';

    var _input = config.src.vendor.fonts,
        _output = config.dist.root_dir + 'assets/fonts/';

    return function(done) {

        return gulp.src(_input)
            .pipe(gulp.dest(_output));
    };

};
