'use strict';
import './Component.css';
import React from 'react';
 var CheckboxWithLabel = require('./CheckboxWithLabel.js');

export default class Hello extends React.Component {
  render() {
    return (
      <div className="component">
        <h1>Hello world</h1>
        <CheckboxWithLabel labelOn="On" labelOff="Off" />
      </div>
    );
  }
}