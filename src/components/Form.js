import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comments:'',
         topic:'react'
      }
    }
    handleUserNameChange = (event) => {
        // event should be passed by default
        //the value of the input change is present in event.target.value
        this.setState({
            username:event.target.value
        })
    }

    handleCommentsChange = (event)=> {
        this.setState({
            comments : event.target.value
        })

    }

    handleTopicChange = (event) => {
        this.setState({
            topic:event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()  // This will avoid the default refreshing of the page on submit
    }
  render() {
    return (
    <form onSubmit={this.handleSubmit}>
        <div>
            <label>Username</label>
            <input type='text' value={this.state.username} onChange={this.handleUserNameChange}></input>
        </div>
        <br></br>
        <div>
            <label>Comments</label>
            <textarea type='text' value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
        </div>
        <br></br>
        <div>
            <label>Topic</label>
            <select value={this.state.topic} onChange={this.handleTopicChange}>
                <option value='react'>React</option>
                <option value='Angular'>Angular</option>
                <option value='Vue'>Vue</option>
            </select>
            
        </div>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Form
