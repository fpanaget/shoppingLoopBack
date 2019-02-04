'use strict';

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  //router.get('/', server.loopback.status());
  router.get('/', function(req, res) {
  //  res.send('Navigate to explorer with /explorer');
    res.redirect('/explorer');
 });
  server.use(router);
  server.enableAuth();
};
