import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AwesomeButton extends Component {
  static propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func
  };

  constructor() {
    super();
  }

  render() {
    const { label, onClick } = this.props;

    return (
      <button
        className='btn btn-primary'
        onClick={onClick}
      >
        <i
          className='glyphicon glyphicon-hourglass'
        >
        </i>
        &nbsp;
        {label || "I'm Awesome!"}
      </button>
    );
  }
}
