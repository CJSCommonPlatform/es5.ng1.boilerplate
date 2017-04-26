(function() {
    'use strict';

    var gulp       = require('gulp'),
        fs         = require('fs'),
        pkg        = require(__dirname + '/package.json'),
        tasksPath  = __dirname + '/tools/task',
        config     = require(__dirname + '/tools/build.config.js')(pkg),
        plugins    = require(__dirname + '/tools/plugins/plugins.js')(),
        buildTasks = [];


    fs.readdirSync ( tasksPath     )
        .filter    ( filterJsFiles )
        .map       ( createTaskVO  )
        .forEach   ( addTask       ) ;


    function filterJsFiles(fileName) {

        return fileName.match(/\.js$/i);
    }

    function createTaskVO(fileName) {

        return {
            name: fileName.substr(0, fileName.length - 3),
            contents: require(tasksPath + '/' + fileName)
        };
    }

    function addTask(taskVO) {
        gulp.task(taskVO.name, taskVO.contents(gulp, config, plugins));
        buildTasks.push(taskVO.name);
    }

}());
