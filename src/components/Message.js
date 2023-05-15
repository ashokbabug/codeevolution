import {React,Component} from 'react';

export default class Message extends Component {
    constructor() {
        super()
        this.state = {
            message:'Welcome Visiter'
        }
    }
    changeMessage() {
        if(this.state.message === 'Welcome Visiter') {
            this.setState({
                message:'Thanks for subscribing'
            })
        }
        else {
            this.setState({
                message:'Welcome Visiter'
            })
        }
        
    }
    //render is a method in Component base class
    render(){
        return(
            <div>
                <h1>{ this.state.message }</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}