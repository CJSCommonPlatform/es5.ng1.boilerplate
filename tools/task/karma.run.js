var TestServer = require('../karma/karma.server.js');

module.exports = function(gulp, config) {
    'use strict';

    var testServer;

    return function(done) {
        testServer = new TestServer(done);
        testServer.start();
    };

};

