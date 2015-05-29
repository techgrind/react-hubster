var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Redirect = Router.Redirect;
var DefaultRoute = Router.DefaultRoute;

var Main = require('./components/app.js');
var Home = require('./components/pages/Home.js');
var Login = require('./components/pages/Login.js');
var SignUp = require('./components/pages/SignUp.js');

var AppRoutes = (
  <Route name="root" path="/" handler={Main}>
    <Route name="login" handler={Login} />
    <Route name="sign_up" handler={SignUp} />
    <DefaultRoute name="home" handler={Home} />
  </Route>
);

module.exports = AppRoutes;