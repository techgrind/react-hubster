(function () {

  var React = require('react'),
    Router = require('react-router'),
    AppRoutes = require('./app-routes.js'),
    injectTapEventPlugin = require("react-tap-event-plugin");

  window.React = React;

  injectTapEventPlugin();

  Router
    .create({
      routes: AppRoutes,
      scrollBehavior: Router.ScrollToTopBehavior
    })
    .run(function (Handler) {
      React.render(<Handler/>, document.body);
    });

})();