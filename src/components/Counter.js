import React from 'react';
import PropTypes from 'prop-types';

// Creating a React stateful component class called 'counter'
const  Counter = ({index, score, changeScore  }) => {
 
          return (
            <div className="counter">
                <button className="counter-action decrement" onClick={() => changeScore(index,-1)}> - </button>
                <span className="counter-score">{ score }</span>
                <button className="counter-action increment" onClick={() => changeScore(index,1)}> + </button>
              </div>
          );
         }
    
// Validate Props with PropTypes
Counter.propTypes = {
  index: PropTypes.number,
  score: PropTypes.number,
  changeScore: PropTypes.func
};

    export default Counter;