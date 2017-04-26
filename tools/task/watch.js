var watch = require('gulp-watch');
var runSequence = require('run-sequence');

module.exports = function(gulp, config, plugins) {
    'use strict';

    var _jsSource   = config.src.js,
        _cssSource  = config.src.scss.files,
        _templates  = config.src.html.templates,
        _testSource = config.src.test;

    return function(done) {

        return runSequence('build', function() {
            _log();
            _watch ( _templates  , [ 'build-templates' ] );
            _watch ( _jsSource   , [ 'build-js'        ] );
            _watch ( _testSource , [ 'test'            ] );
            _watch ( _cssSource  , [ 'build-css'       ] );
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

