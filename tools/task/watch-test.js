var watch = require('gulp-watch');
var runSequence = require('run-sequence');

module.exports = function(gulp, config, plugins) {
    'use strict';

    var _jsSource = config.src.js;
    var _cssSource = config.src.scss.files;
    var _testSource = config.src.test;

    return function(done) {

        return runSequence('test', function() {
            _log();
            _watch(_jsSource, ['test']);
            _watch(_testSource, ['test']);
        });
    };

    function _log() {
        console.log('Watching sourcecode...');
    }

    function _watch(input, tasks) {

        return gulp.watch(input, function() {
            runSequence.apply(this, tasks);
            _log();
        });
    }

};
