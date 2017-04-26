var watch = require('gulp-watch');
var runSequence = require('run-sequence');

module.exports = function(gulp, config, plugins) {
    'use strict';

    var _js        = config.src.js,
        _templates = config.src.html.templates,
        _css       = config.src.scss.files,
        _test      = config.src.test;

    return function(done) {

        return runSequence('build', function() {
            _log();
            _watch ( _templates , [ 'build-templates' ] );
            _watch ( _js        , [ 'build-js'        ] );
            _watch ( _css       , [ 'build-css'       ] );
        });
    };

    function _log() {
        console.log('Watching sourcecode...');
    }

    function _watch(input, tasks) {

        return gulp.watch(input, function() {
            runSequence.apply(this, tasks);
            _reload();
            _log();
        });
    }

    function _reload() {
        plugins.browserSync.reload();
    }

};
