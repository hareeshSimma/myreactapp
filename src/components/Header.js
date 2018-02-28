import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        { this.props.children }
        <h1>Welcome to Todo</h1>
      </div>
    )
  }
}
