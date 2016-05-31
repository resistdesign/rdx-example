import 'bootstrap/dist/css/bootstrap.css';
import React, { Component, PropTypes } from 'react';
import AwesomeButton from './comps/AwesomeButton';

export default class RDXExample extends Component {
  static propTypes = {};

  constructor() {
    super();

    // Pre-bind event handlers.
    this.onLabelChange = ::this.onLabelChange;
    this.onAwesomeButtonClick = ::this.onAwesomeButtonClick;
  }

  state = {
    label: ''
  };

  onLabelChange(event) {
    const { value } = event.target;

    this.setState({
      label: value
    });
  }

  onAwesomeButtonClick() {
    this.setState({
      label: 'OMG, I thought you would never click me!'
    });
  }

  render() {
    const { label } = this.state;

    return (
      <div
        className='container'
      >
        <h1>
          RDX Example
        </h1>
        <br />
        <input
          placeholder='Enter button label...'
          value={label}
          onChange={this.onLabelChange}
          className='form-control'
        />
        <br />
        <br />
        <AwesomeButton
          label={label}
          onClick={this.onAwesomeButtonClick}
        />
      </div>
    );
  }
}
