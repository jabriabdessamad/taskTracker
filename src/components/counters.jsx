import React, { Component } from 'react'
import Counter from './counter';


class Counters extends React.Component {

    state = {
        counters : [
            {id : 1, value : 3},
            {id : 2, value : 0},
            {id : 3, value : 0},
            {id : 4, value : 0}
        ]
    }
     handleIncrement = counter =>{
         console.log(counter);
     }


    render() { 
        return (
        <div>
            <button onClick={this.handleReset}>
                Reset
            </button>
        </div>
        
        );
        
    }
}
 
export default Counters;