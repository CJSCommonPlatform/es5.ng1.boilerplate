var runSequence = require('run-sequence');

module.exports = function(gulp, config) {
    'use strict';

    return function(done) {

        runSequence(
            'clean',
            'build-templates',
            'build-js',
            'concat-vendor',
            'build-assets-css',
            'build-css',
            'copy-assets',
            'copy-fonts',
            'copy-vendor-images',
            'copy-index',
            'build-index',
            'browser-sync',
            done
        );
    };
};
