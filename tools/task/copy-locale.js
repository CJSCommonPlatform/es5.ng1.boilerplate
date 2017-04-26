module.exports = function(gulp, config) {
    'use strict';

    var _input = config.src.locale,
        _output = config.dist.root_dir + 'locale/';

    return function(done) {

        return gulp.src(_input)
            .pipe(gulp.dest(_output));
    };
};
