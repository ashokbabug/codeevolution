import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef()
    }
    //this.inputRef.current points to a dom element
    componentDidMount(){
        //we are calling focus method to focus on to the current dom node
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }
    clickHandler = ()=> {
        alert(this.inputRef.current.value)
    }
    
  render() {
    return (
      <div>
        <label>Username</label>
        <input type="text" ref={this.inputRef}></input>
        <button onClick={this.clickHandler}>Submit</button>
      </div>
    )
  }
}

export default RefsDemo
