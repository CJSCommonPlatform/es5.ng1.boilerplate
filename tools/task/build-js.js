var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var utils = require('gulp-util');

module.exports = function(gulp, config) {
    'use strict';

    var _is_production_mode = config.compile_mode === 'prod',
        _input = config.src.js,
        _outputFileName = config.dist.js.app_bundle,
        _outputDir = config.dist.root_dir;

    return function(done) {

        return gulp.src(_input)
            .pipe(sourcemaps.init())
            .pipe(_uglify())
            .pipe(concat(_outputFileName))
            .pipe(_write_sourcemaps())
            .pipe(gulp.dest(_outputDir));
    };

    function _uglify() {
        return (_is_production_mode) ? uglify() : utils.noop();
    }

    function _write_sourcemaps() {
        return (_is_production_mode) ? sourcemaps.write('.') : sourcemaps.write();
    }

};
