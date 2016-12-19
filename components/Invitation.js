import React, {Component} from 'react'

class Invitation extends Component {
  render() {
    return (
      <div>
        <h1>You've been invited!</h1>
        <h3>{this.props.children}</h3>
      </div>
    );
  }
}

module.exports = Invitation
