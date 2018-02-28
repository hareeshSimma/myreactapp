import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer ext-muted">
        { this.props.children }
        <p className="text-muted">Copy Rights Belongs to Me.</p>
      </div>
    )
  }
}
