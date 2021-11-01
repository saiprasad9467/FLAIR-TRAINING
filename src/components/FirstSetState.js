import React, { Component } from 'react'

export class FirstSetState extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    incremnt=()=>{
        this.setState((prevstate)=>{
           this.state.count=prevstate.count + 1
        });
    };
    
    render() {
        return (
            <div>
            <h2>count-{this.state.count}</h2>
                <button onClick={()=>this.increment()}>increment</button>
   </div>      
        )
    }
}

export default FirstSetState
