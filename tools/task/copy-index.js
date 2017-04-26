
module.exports = function(gulp, config) {
    'use strict';

    var _input = config.src.html.index,
        _output = config.dist.root_dir;

    return function(done) {

        return gulp.src(_input)
            .pipe(gulp.dest(_output));
    };
};
