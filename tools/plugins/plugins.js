module.exports = function() {

    return {
        browserSync    : require('browser-sync').create(),
        concat         : require('gulp-concat'),
        cssmin         : require('gulp-cssmin'),
        inject         : require('gulp-inject'),
        inject_version : require('gulp-inject-version'),
        path           : require('path'),
        rename         : require('gulp-rename'),
        sass           : require('gulp-sass'),
    };
};

