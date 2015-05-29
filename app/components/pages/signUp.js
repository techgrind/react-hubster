var React = require('react');
var mui = require('material-ui');
var StyleResizable = mui.Mixins.StyleResizable;

var { TextField, RaisedButton, clearFix } = mui;

var SignUp = React.createClass ({

  mixins: [StyleResizable],

  getStyles: function() {
    var styles = {
      inp: {
        width: '100%',
        float: 'left',
        marginTop: '24px',
        marginRight: '4%'
      }
    };

    if (this.isDeviceSize(StyleResizable.statics.Sizes.LARGE)) {
      styles.inp.width = '42%';
    }

    return styles;
  },

  render: function() {
    var styles = this.getStyles();

    return (
      <clearFix>
        <TextField 
          style={styles.inp}
          floatingLabelText="First Name"
          hintText="John" />
        <TextField 
          style={styles.inp}
          floatingLabelText="Last Name"
          hintText="Smith" />
        <TextField 
          style={styles.inp}
          floatingLabelText="Email"
          hintText="john.smith@hubster.com" />
        <TextField 
          style={styles.inp}
          floatingLabelText="Password"
          hintText="********" />
        <RaisedButton
          style={styles.inp}
          label="Submit"
          secondary={true} />
        <RaisedButton
          style={styles.inp}
          label="Cancel"
          primary={true} />
      </clearFix>

    );
  }

});

module.exports = SignUp;