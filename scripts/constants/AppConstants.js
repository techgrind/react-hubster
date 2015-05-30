var keyMirror = require('keymirror');

var APIRoot = "http://localhost:3000";

var AppConstants = {

  APIEndpoints: {
    LOGIN: APIRoot + "/auth/login",
    REGISTRATION: APIRoot + "/auth/users"
  },

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  }),

  ActionTypes: keyMirror({
    LOGIN_REQUEST: null,
    LOGIN_RESPONSE: null,

    REDIRECT: null,
    LOGOUT: null
  })

};

module.exports = AppConstants;