import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'Hello'
      }
      this.clickHandler3 = this.clickHandler.bind(this)
    }
    // if you call this function as this.clickHandler then this is undefined because we are in a strict mode
    //to overcome this even binding is necessary in react class component
    clickHandler() {
        this.setState(
            {
                message:'Good Bye'
            }
        )
        console.log(this)  //without event binding it gives undefined
    }
    clickHandler4 = () => {
      this.setState(
        {
            message:'Good Bye'
        }
    )
    
  }
  // first approach loads the function again when we refresh the component
  //approach 3 and 4 is suggestable to use 
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* <button onClick={()=>this.clickHandler()}>Click</button> */}
        {/* <button onClick={this.clickHandler3}>Click</button> */}
        <button onClick={this.clickHandler4}>Click</button>
      </div>
    )
  }
}

export default EventBind
