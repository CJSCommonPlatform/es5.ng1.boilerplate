var command_arguments = require('yargs').argv;

module.exports = function(pkg) {
    'use strict';

    var _name = pkg.name,
        _version = pkg.version,
        _compile_output = {
            prod: 'dist/prod/',
            dev: 'dist/dev/'
        },

        _compile_mode = command_arguments.prod ? 'prod' : 'dev',

        _dist = {
            templates_bundle: _name + '-templates.' + _version + '.js',
            root_dir: _compile_output[_compile_mode],
            index: 'index.html',
            js: {
                vendor_bundle: _name + '.vendor.' + _version + '.js',
                app_bundle: _name + '.' + _version + '.js'
            },
            css: {
                vendor_bundle: _name + '.vendor.' + _version + '.css',
                app_bundle: _name + '.' + _version + '.css'
            },
            injectables: [
                _compile_output[_compile_mode] + _name + '.vendor.' + _version + '.js',
                _compile_output[_compile_mode] + '*.js',
                _compile_output[_compile_mode] + _name + '.vendor.' + _version + '.css',
                _compile_output[_compile_mode] + _name + '.' + _version + '.css'
            ]
        },

        _phantom_polyfills = [
            'node_modules/phantomjs-polyfill/bind-polyfill.js',
            'node_modules/whatwg-fetch/fetch.js',
            'node_modules/promise-polyfill/promise.js',
        ],

        _vendor = {
            dev: {
                spec: [
                    'node_modules/angular-mocks/angular-mocks.js',
                ],
                js: [
                    'node_modules/angular/angular.js',
                    'node_modules/angular-animate/angular-animate.js',
                    'node_modules/angular-messages/angular-messages.js',
                    'node_modules/ng-smooth-scroll/lib/angular-smooth-scroll.js',
                    'node_modules/@govuk/angularjs-components/angularjs-components.js',
                    'node_modules/ng-prettyjson/dist/ng-prettyjson.min.js',
                ],
                css: [
                    'node_modules/ng-prettyjson/dist/ng-prettyjson.min.css',
                ],
                fonts: [
                    'node_modules/@govuk/platform-template/assets/fonts/*',
                    'node_modules/font-awesome/fonts/*'
                ],
                images:[
                    'node_modules/@govuk/platform-template/assets/images/*'
                ]
            },
            prod: {
                spec: [
                    'vendor/angular-mocks/angular-mocks.js',
                ],
                js: [
                    'vendor/angular/angular.min.js',
                    'node_modules/@govuk/angularjs-components/angularjs-components.js',
                    'node_modules/ng-prettyjson/dist/ng-prettyjson.min.js',
                    'node_modules/pdk/index.js',
                ],
                css: [
                ],
                fonts: [
                    'node_modules/@govuk/platform-template/assets/fonts/*'
                ],
                images:[
                    'node_modules/@govuk/platform-template/assets/images/*'
                ]
            }
        },

        _src = {
            npm: 'package.json',
            assets: 'src/assets/**',
            locale: 'src/locale/**',
            js: [
                'src/**/*.js',
                '!src/**/*.mock.js',
                '!src/**/*.spec.js'
            ],
            test: [
                'src/**/*.mock.js',
                'src/**/*.spec.js'
            ],
            scss: {
                index: 'src/index.scss',
                files: 'src/**/*.scss'
            },
            html: {
                index: 'src/index.html',
                templates: 'src/app/**/*.tpl.html'
            },
            vendor: _vendor[_compile_mode]
        };

    return {

        compile_mode: _compile_mode,

        phantom_polyfills: _phantom_polyfills,

        dist: _dist,
        src: _src
    };

};
