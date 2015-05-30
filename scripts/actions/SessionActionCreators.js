var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var AppConstants = require('../constants/AppConstants.js');
var WebAPIUtils = require('../utils/WebAPIUtils.js');

var ActionTypes = AppConstants.ActionTypes;

var SessionActionCreators = {

  singup: function(email, password, passwordConfirmation) {
    
    var CONFIRM_SUCCESS_URL = '/';

    AppDispatcher.handleViewAction({
      type: ActionTypes.SIGNUP_REQUEST,
      email: email,
      password: password,
      passwordConfirmation: passwordConfirmation,
      confirmSuccessUrl: CONFIRM_SUCCESS_URL
    });
    WebAPIUtils.signup(email, password, passwordConfirmation, confirmSuccessUrl);

  },

  login: function(email, password) {
    
    AppDispatcher.handleViewAction({
      type: ActionTypes.LOGIN_REQUEST,
      email: email,
      password: password
    });
    WebAPIUtils.login(email, password);
  },

  logout: function() {

    AppDispatcher.handleViewAction({
      type: ActionTypes.LOGOUT
    });
  }

}

module.exports = SessionActionCreators;

