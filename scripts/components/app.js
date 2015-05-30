require('../css/app.css');
var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var SessionStore = require('../stores/SessionStore.js');
var AppLeftNav = require('./AppLeftNav.js');
var mui = require('material-ui');

var Colors = mui.Styles.Colors;
var Typography = mui.Styles.Typography;
var ThemeManager = new mui.Styles.ThemeManager();

var { AppBar, AppCanvas, Menu, LeftNav, MenuItem, IconButton } = mui;

function getStateFromStores() {
  return {
    isLoggedIn: SessionStore.isLoggedIn(),
    email: SessionStore.getEmail()
  };
}

class App extends React.Component {
  
  constructor() {
    super();
    this._onLeftIconButtonTouchTap = this._onLeftIconButtonTouchTap.bind(this);
    this.state = getStateFromStores();
  }

  componentDidMount() {
    SessionStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    SessionStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(getStateFromStores());
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
      this.context.router.isActive('login') ? 'Log In' :
      this.context.router.isActive('sign_up') ? 'Sign Up' : '';

    title += this.state.isLoggedIn ? ' Logged In' : ' Not Logged In';


    return (
      <AppCanvas predefinedLayout={1}>
        <AppBar
          onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap}
          title={title}
          zDepth={0}
        />
        <AppLeftNav ref="leftNav" />
        
        <div className="content">
          <RouteHandler />
        </div>
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