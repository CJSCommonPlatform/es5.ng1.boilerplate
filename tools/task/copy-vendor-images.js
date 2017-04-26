module.exports = function(gulp, config) {
    'use strict';

    var _input = config.src.vendor.images,
        _output = config.dist.root_dir + 'assets/images/';

    return function(done) {

        return gulp.src(_input)
            .pipe(gulp.dest(_output));
    };

};
