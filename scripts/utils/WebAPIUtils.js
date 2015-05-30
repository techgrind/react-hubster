var ServerActionCreators = require('../actions/ServerActionCreators.js');
var AppConstants = require('../constants/AppConstants.js');
var request = require('superagent');

var APIEndpoints = AppConstants.APIEndpoints;

var WebAPIUtils = {

  login: function(email, password) {
    request.post(APIEndpoints.LOGIN)
      .send({ username: email, password: password })
      .set('Accept', 'application/json')
      .end(function(error, res) {
        if (res) {
          if (res.error) {
            var errorMsgs = _getErrors(res);
            ServerActionCreators.receiveLogin(null, errorMsgs);
          } else {
            json = JSON.parse(res.text);
            ServerActionCreators.receiveLogin(json, null);
          }
        }
      });
  }
};

module.exports = WebAPIUtils;