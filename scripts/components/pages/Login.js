var React = require('react');
var mui = require('material-ui');

var { TextField, RaisedButton, Dialog } = mui;


class Login extends React.Component {

  constructor() {
    super();
    this.state = {
      modal: true
    };
  }

  componentDidMount() {
    this.refs.login.show();
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

    var loginAction = [
      <RaisedButton
        key='1'
        style={styles.button}
        label="Submit"
        secondary={true} />,
      <RaisedButton
        key='2'
        style={styles.button}
        label="Cancel"
        primary={true} />
    ];

    return (
      <Dialog
        style={styles.dialog}
        ref="login"
        title="Welcome to Hubster"
        actions={loginAction}>
          <TextField 
            style={styles.input}
            floatingLabelText="Email"
            hintText="john.smith@hubster.com" />
          <TextField 
            style={styles.input}
            floatingLabelText="Password"
            hintText="********" />
      </Dialog>

    );
  }
}

module.exports = Login;