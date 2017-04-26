var concat = require('gulp-concat');

module.exports = function(gulp, config) {

    var _input = config.src.vendor.css,
        _outputFileName = config.dist.css.vendor_bundle,
        _outputDir = config.dist.root_dir;


    return function(done) {

        return gulp.src(_input)
            .pipe( concat(_outputFileName) )
            .pipe( gulp.dest(_outputDir) )
    };
}
