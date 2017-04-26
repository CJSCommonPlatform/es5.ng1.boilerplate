var html2js = require('gulp-html2js'),
    html_min = require('gulp-htmlmin');


module.exports = function(gulp, config) {
    'use strict';

    var _input = config.src.html.templates,
        _outputFileName = config.dist.templates_bundle,
        _outputDir = config.dist.root_dir;

    return function(done) {

        return gulp.src(_input)
            .pipe( _minify_html() )
            .pipe( _html2js() )
            .pipe(gulp.dest('.'));
    };

    function _minify_html() {
        return html_min({
            collapseWhitespace: true,
            removeComments: true,
            customAttrCollapse: /ng-class/
        });
    }

    function _html2js() {

       return html2js(_outputDir + _outputFileName, {
            base: 'src',
            name: 'templates-app'
        });
    }
};
