var React = require('react');
var SessionActionCreators = require('../../actions/SessionActionCreators.js');
var SessionStore = require('../../stores/SessionStore.js');
var mui = require('material-ui');

var { TextField, RaisedButton, FlatButton, Dialog } = mui;

class Login extends React.Component {

  constructor() {
    super();
    this.state = {
      modal: false,
      email: '',
      password: ''
    };
  }

  componentDidMount() {
    this.refs.login.show();
    SessionStore.addChangeListener(this.handleChange);
  }

  componentWillUnmount() {
    SessionStore.removeChangeListener(this.handleChange);
  }

  handleChange(name, event) {
    var change = {};
    change[name] = event.target.value;
    this.setState(change);
  }

  handleSubmit() {
    var email = this.state.email;
    var password = this.state.password;
    SessionActionCreators.login(email, password);
  }

  getStyles() {
    var styles = {
      button: {
        margin: '5% 5%'
      },
      input: {
        width: '100%',
        float: 'left',
        marginTop: '24px',
        marginRight: '4%'
      }
    };

    return styles;
  }

  render() {

    var styles = this.getStyles();

    return (
      <Dialog
        style={styles.dialog}
        ref="login"
        title="Welcome to Hubster">
        <TextField
          style={styles.input}
          value={this.state.email}
          floatingLabelText="Email"
          hintText="john.smith@hubster.io"
          onChange={this.handleChange.bind(this, 'email')}
          onEnterKeyDown={this.handleSubmit.bind(this)} />
        <TextField 
          type="password"
          style={styles.input}
          value={this.state.password}
          floatingLabelText="Password"
          hintText="********"
          onChange={this.handleChange.bind(this, 'password')}
          onEnterKeyDown={this.handleSubmit.bind(this)} />
        <RaisedButton
          key="1"
          style={styles.button}
          label="Submit"
          onTouchTap={this.handleSubmit.bind(this)}
          secondary={true} />
      </Dialog>

    );
  }
}

module.exports = Login;