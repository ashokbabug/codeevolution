import React, { Component } from 'react'

class ChildA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Ainput:''
      }
    }
    changeInput = (event)=> {
        this.setState({
            Ainput:event.target.value
        },
        ()=>{
            this.props.fn(this.state.Ainput)
        }
        )
        
    }
    
  render() {
    return (
      <div>
        <label>Child A  </label>
        <input value={this.state.Ainput} onChange={this.changeInput} ></input>
      </div>
    )
  }
}

export default ChildA
