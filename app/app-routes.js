var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Redirect = Router.Redirect;
var DefaultRoute = Router.DefaultRoute;

var Main = require('./components/app.js');
var Home = require('./components/pages/home.js');
var LogIn = require('./components/pages/logIn.js');
var SignUp = require('./components/pages/signUp.js');

var AppRoutes = (
  <Route name="root" path="/" handler={Main}>
    <Route name="logIn" handler={LogIn} />
    <Route name="signUp" handler={SignUp} />
    <DefaultRoute name="home" handler={Home} />
  </Route>
);

module.exports = AppRoutes;