var concat = require('gulp-concat');

module.exports = function(gulp, config) {
    'use strict';

    var _input = config.src.vendor.js,
        _outputFileName = config.dist.js.vendor_bundle,
        _outputDir = config.dist.root_dir;

    return function(done) {

        return gulp.src( _input )
            .pipe( concat( _outputFileName ) )
            .pipe( gulp.dest( _outputDir ) );
    };

};
