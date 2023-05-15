import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedIn:false
      }
    }
    
  render() {
    // 1)If else method

    // if(this.state.isLoggedIn){
    //     return <div>Welcome Ashok</div>
    // }
    // else {
    //     return <div> Welcome Guest</div>
    // }

    // 2)Using element variables

    // let message
    // if (this.state.isLoggedIn) {
    //     message = 'Hello Ashok'
    // }
    // else {
    //     message = 'Hello Guest'
    // }
    // return <div>{message}</div>

    // 3)Using ternary conditional operator

    // return (
    //     this.state.isLoggedIn ? <div> Welcome Ashok</div>:<div>Welcome Guesr</div>
    // )

    // 4)Short circuit operator  -> If you want to return something or nothing

    return this.state.isLoggedIn && <div>Welcome Ashok</div>


    
  }
}

export default UserGreeting
