module.exports = TestServer;


function TestServer(done) {
    'use strict';

    var karmaServer,
        KarmaServer,
        configFilePath,
        testServer,
        callback;

    this.start = startKarma;

    init();

    function init() {

        KarmaServer = require('karma').Server;
        configFilePath = __dirname + '/karma.conf.js';
        callback = done;

        karmaServer = new KarmaServer({configFile: configFilePath}, doneCallback);
    }

    function doneCallback(data) {
      if (data instanceof Error) {
        console.log('TestServer.Error', data);
      }
      callback();
    }

    function startKarma() {
      try {
        karmaServer.start();
      } catch ( e ) {
        console.log('\n\nERROR\n\n');
      }
    }
}
