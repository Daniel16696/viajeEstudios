// Copyright IBM Corp. 2014,2015. All Rights Reserved.
// Node module: loopback-example-user-management
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

'use strict';
var dsConfig = require('../datasources.local.js');

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  //login page
  router.get('/', function(req, res) {
    var credentials = dsConfig.myEmailDataSource.transports[0].auth;
    res.render('login', {
      email: credentials.user,
      password: credentials.pass
    });
  });
  server.use(router);
  //verified
  router.get('/verified', function(req, res) {
    res.render('verified');
});
};