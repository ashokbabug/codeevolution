import React, { Component } from 'react'
import Hero from './Hero'

class ErrorBounary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError:false
      }
    }
    
    static getDerivedStateFromError(error) {
        return {
            hasError:true
        }
    }
    componentDidCatch(error,info) {
        //you can send this data to any server logs
        console.log(error)
        console.log(info)
    }
  render() {
    if (this.state.hasError) {
        return <h1>Something went Wrong</h1>
    }
    return (
      <div>
        
        {this.props.children}
      </div>
    )
  }
}

export default ErrorBounary
