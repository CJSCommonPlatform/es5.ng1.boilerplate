module.exports = function(gulp, config, plugins) {
    'use strict';

    var _is_production_mode = config.compile_mode === 'prod',
        _input = config.src.scss.index,
        _outputFileName = config.dist.css.app_bundle,
        _outputDir = config.dist.root_dir,
        _sourcemapsConfig = {
            sourceMappingURLPrefix: 'src/'
        };

    return function(done) {

        return gulp.src(_input)
            .pipe(_process_scss())
            .pipe(plugins.rename(_outputDir + _outputFileName))
            .pipe(gulp.dest('.'));
    };

    function _process_scss() {
        //@todo mv all this to conf
        var sass_conf = {
            includePaths: [
                'node_modules/govuk_frontend_toolkit/stylesheets'
            ],
            importer: function importer(url) {
                if (url[0] === '~') {
                    url = plugins.path.resolve(process.cwd(), 'node_modules', url.substr(1));
                }
                return {
                    file: url
                };
            }
        };

        return plugins.sass(sass_conf).on('error', plugins.sass.logError);
    }

    function _minify_css() {
        return (_is_production_mode) ? plugins.cssmin() : function() {}();;
    }

    function _write_sourcemaps() {
        return (_is_production_mode) ? sourcemaps.write('.') : sourcemaps.write(_sourcemapsConfig);
    }
};

