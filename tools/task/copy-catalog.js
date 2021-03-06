module.exports = function(gulp, config) {
    'use strict';

    var _input = config.src.catalog,
        _output = config.dist.root_dir + 'src/';

    return function(done) {

        return gulp.src(_input)
            .pipe(gulp.dest(_output));
    };
};
