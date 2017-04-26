
module.exports = function (gulp, config, plugins) {
    'use strict';

    var _outputDir = config.dist.root_dir,
        _input = _outputDir + config.dist.index,
        _sources = config.dist.injectables,
        _options = {
            read: false
        };

    return function (done) {

        return gulp.src(_input)
            .pipe(plugins.inject_version())
            .pipe(_inject())
            .pipe(gulp.dest(_outputDir));

    };

    function _inject() {

        return plugins.inject(gulp.src(_sources, _options),{relative: true});
    }

};
