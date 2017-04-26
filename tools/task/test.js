var runSequence = require('run-sequence');

module.exports = function(gulp, config) {
    'use strict';

    return function(done) {

        runSequence(
            'build-templates',
            'karma.run',
            done
        );
    };
};
