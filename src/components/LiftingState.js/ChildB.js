import React, { Component } from 'react'

export class ChildB extends Component {
  render() {
    return (
      <div>
        <label>Child B  </label>
        <input value={this.props.val}></input>
      </div>
    )
  }
}

export default ChildB
