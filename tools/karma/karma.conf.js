/*jshint indent:false */
var pkg = require('../../package.json'),
  buildConfig = require('../build.config.js')(pkg);

module.exports = function(karma) {
  'use strict';

  karma.set({
    basePath: './../../',
    files: _get_files(),
    exclude: ['src/assets/**/*.js'],
    frameworks: ['jasmine'],
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    autoWatch: false,
    browsers: [
        //'Chrome',
        'PhantomJS',
    ],
    singleRun: true
  });

  function _get_files() {

    var polyfills = buildConfig.phantom_polyfills,
      vendor = buildConfig.src.vendor.js,
      spec_vendor = buildConfig.src.vendor.spec,
      templates = [buildConfig.dist.root_dir + buildConfig.dist.templates_bundle],
      js_files = ['src/**/*.js'];

    return []
      .concat(polyfills)
      .concat(vendor)
      .concat(spec_vendor)
      .concat(templates)
      .concat(js_files);
  }

};

