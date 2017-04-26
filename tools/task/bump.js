var bump = require('gulp-bump');

module.exports = function(gulp, config) {

     var _input = [config.src.bower, config.src.npm],
         _outputDir = './';
     
    return function(done) {
        return gulp.src(_input)
        .pipe(bump())
        .pipe(gulp.dest(_outputDir))
    };

}