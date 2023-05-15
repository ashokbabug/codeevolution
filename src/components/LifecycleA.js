import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Ashok'
      }
      console.log('lifeCycleA constructor')
    }
    static getDerivedStateFromProps(props,state) {
      console.log('LifeCycleA getDerivedStateFromProps')
      //it can return null or the updated state object 
      return null
    }
    componentDidMount() {
      console.log('LifeCycleA compoundDid')
    }
    shouldComponentUpdate() {
      console.log('LifeCycleA shouldComponentUpdate')
      return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState) {
      console.log('LifeCycleA getSnapshotBeforeUpdate')
      return null
    }

    componentDidUpdate() {
      console.log('LifeCycleA componentDidUpdate')
    }
    changeState = ()=> {
      this.setState({
        name:'Hello'
      })
      console.log(this.state.name)
    }
  render() {
    console.log('LifeCycleA render')
    return (
      <div>
        lets study lify cycle methods
        <button onClick={this.changeState}>Change State</button>
        <LifeCycleB></LifeCycleB>
      </div>
    )
  }
}

export default LifecycleA
