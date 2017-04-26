var jshint = require('gulp-jshint');

module.exports = function(gulp, config) {
    'use strict';

    var _input = config.src.js,
        _outputFileName = config.dist.css.vendor_bundle,
        _outputDir = config.dist.root_dir;

    return function(done) {
        return gulp.src(_input)
            .pipe(jshint())
            .pipe(jshint.reporter('default'))
    };

};
