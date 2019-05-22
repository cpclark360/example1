import React from 'react';
import logo from './logo.svg';
import './App.css';

// const code = 'src/App.js';
// function App() {
//   return (
//     <div className="App">
//     {/* Comments go here */}
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>{ code }</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


// Creating a React stateless component called 'Header'
const Header = ( props ) => {
  console.log( props );
  return (
    <header>
      <h1>{ props.title }</h1>
      <span className='stats'>Players: { props.totalPlayers }</span>
    </header>
  );
}

// Creating a React stateless component called 'Player'
const Player = ( props ) => {
    return(
    <div className="player">
      <span className="player-name">
        { props.name }
      </span>

      <Counter />
    </div>
  );
}

// Creating a React stateful component class called 'counter'
class Counter extends React.Component {
// creating state for counter 
  constructor() {
    // super() needed to use React.Component 'this'
    super()
    this.state = {
      // set default value of the state
      score: 0
    };
  }
  /* 
    or create state this way. Babel

    state = {
      score: 0
    };
  */
incrementScore = ( ) => {
  // pass setState() an object or callback function is going to fire no matter what
  this.setState( prevState => {
    return {
      score: prevState.score += 1
    };
  });
}

decrementScore = ( ) => {
  // pass setState() an object or callback function is going to fire no matter what
  this.setState( prevState => {
    return {
      score: prevState.score -= 1
    };
  });
}
    render( ) {
      return (
        <div className="counter">
            <button className="counter-action decrement" onClick={ this.decrementScore }> - </button>
            <span className="counter-score">{ this.state.score }</span>
            <button className="counter-action increment" onClick={ this.incrementScore }> + </button>
          </div>
      );
     }
}

// Main component 
class App extends React.Component {

constructor() {
  super()
  this.state = {
    players: [
      {
        name: "Guil",
        id: 0
      },
      {
        name: "Treasure",
        id: 1
      },
      {
        name: "Ashley",
        id: 2
      },
      {
        name: "James",
        id: 3
        }
    ]
  }
}


  render() {
    return (
      <div className="scoreboard">
        <Header 
        title="scoreboard" 
        totalPlayers={ this.state.players.length }
        />

        {/* Players list */}
        {/* Java script expressions must be contained inside curly brackets */}
        {/* iterate over array using map() */}
        {this.state.players.map(( players ) => 
          <Player 
            {...players} /* spread operator that stores all the properties in an object */
            name={ players.name } 
            key={ players.id.toString() }
            />
          )}

          {/*
        <Player name="Cedric" score={50} />
        <Player name="Paxton" score={70} />
        <Player name="Mario" score={20} />
        <Player name="Ashley" score={33} />
        */}
      </div>
    );
   } 
}

export default App;
