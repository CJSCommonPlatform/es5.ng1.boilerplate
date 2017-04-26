module.exports = function(gulp, config, plugins) {
    'use strict';

    var _baseDir = config.dist.root_dir;

    return function() {

        plugins.browserSync.init({
            server: {
                baseDir: _baseDir
            },
            open: false
        });
    }
};

