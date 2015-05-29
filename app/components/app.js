var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var AppLeftNav = require('./appLeftNav.js');
var mui = require('material-ui');

var Colors = mui.Styles.Colors;
var Typography = mui.Styles.Typography;
var ThemeManager = new mui.Styles.ThemeManager();

var { AppBar, AppCanvas, Menu, LeftNav, MenuItem } = mui;

class App extends React.Component {
  
  constructor() {
    super();
    this._onLeftIconButtonTouchTap = this._onLeftIconButtonTouchTap.bind(this);
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  _onLeftIconButtonTouchTap() {
    this.refs.leftNav.toggle();
  }

  render() {
    var title =
      this.context.router.isActive('home') ? 'Home' :
      this.context.router.isActive('logIn') ? 'Log In' :
      this.context.router.isActive('signUp') ? 'Sign Up' : '';


    return (
      <AppCanvas predefinedLayout={1}>
        <AppBar
          onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap}
          title={title}
          zDepth={0} />
        <AppLeftNav ref="leftNav" />
        <RouteHandler />
      </AppCanvas>
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.func
};

App.childContextTypes = {
  muiTheme: React.PropTypes.object
};

module.exports = App;