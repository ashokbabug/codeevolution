import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count:0
        }
        
    }
    increment() {
        // If you directly change the state like below the UI dont re render
        // this.state.count = this.state.count+1

        //Always use set state method
        this.setState(
            {
            count:this.state.count+1
            },
            () => {
                //this arrow function executes only after setState executes
                console.log('Callback value',this.state.count)
            }
        )
        // calls to set state method is asynchronous
        // console.log run before the setState
        console.log(this.state.count)
    }
    incrementFive() {
        //when you continuously calling setState method then all the calls are combined
        //here only it  was incremented only once
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
  render() {
    return (
        <div>
            <div>
                Count - {this.state.count}
            </div>
             <button onClick={()=>this.increment()}>Increment</button>
        </div>
      

      
    )
  }
}

export default Counter
