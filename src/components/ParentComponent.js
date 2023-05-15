import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:'Parent'
      }
      this.greetParent = this.greetParent.bind(this)
    }
    // we are taking the reference of greetParent function and passing it to child component
    // we are executing the function in child component
    // same as variables we are just passing the function
    greetParent(childName) {
        alert(`Hello ${this.state.parentName} from ${childName}`)
        
    }
    
  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent}></ChildComponent>
      </div>
    )
  }
}

export default ParentComponent
