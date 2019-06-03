import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

// Creating a React stateless component called 'Player'
// extend 'PureComponent' only re-renders the portion of that changes to save resources.
class Player extends PureComponent {
  
// defining propTypes inside the class
static propTypes = {
  name: PropTypes.string,
  removePlayer: PropTypes.func,
  id: PropTypes.number,
  score: PropTypes.number,
  index: PropTypes.number,
  changeScore: PropTypes.func 
};

  render() {
    // destructuring 'this.props'
    const { 
      name,
      removePlayer,
      id,
      score,
      index,
      changeScore 
    } = this.props;
    
    return(
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={ () => removePlayer(id)}>✖</button>
        { name }
      </span>
      
      <Counter 
      score={ score }
      index={ index }
      changeScore={ changeScore }  
    />
    </div>
  );
  }
  
}

export default Player;