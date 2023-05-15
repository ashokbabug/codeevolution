import React, { Component } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'

class Parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         value:''
      }
    }

    changeParentState = (val) => {
        this.setState({
            value:val
        })
    }

  render() {
    return (
      <div>
        <ChildA fn={this.changeParentState}></ChildA>
        <br/>
        <ChildB val={this.state.value}></ChildB>
      </div>
    )
  }
}

export default Parent
