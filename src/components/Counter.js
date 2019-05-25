import React from 'react';

// Creating a React stateful component class called 'counter'
class Counter extends React.Component {
    // creating state for counter 
    //  constructor() {
        // super() needed to use React.Component 'this'
     //   super()
      //  this.state = {
      //    // set default value of the state
      //    score: 0
     //   };
     // }
      /* 
        or create state this way. Babel
    
        state = {
          score: 0
        };
      */
    
    
    // decrementScore = ( ) => {
    //   // pass setState() an object or callback function is going to fire no matter what
    //   this.setState( prevState => {
    //     return {
    //       score: prevState.score -= 1
    //     };
    //   });
    // }
        render( ) {
          return (
            <div className="counter">
                <button className="counter-action decrement" onClick={() => this.props.changeScore(-1)}> - </button>
                <span className="counter-score">{ this.props.score }</span>
                <button className="counter-action increment" onClick={() => this.props.changeScore(1)}> + </button>
              </div>
          );
         }
    }



    export default Counter;