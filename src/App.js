import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Player from './components/Player';
import Addplayer from './components/Addplayer';

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


// // Creating a React stateless component called 'Header'
// const Header = ( props ) => {
//   console.log( props );
//   return (
//     <header>
//       <h1>{ props.title }</h1>
//       <span className='stats'>Players: { props.totalPlayers }</span>
//     </header>
//   );
// }

// // Creating a React stateless component called 'Player'
// const Player = ( props ) => {
//     return(
//     <div className="player">
//       <span className="player-name">
//         <button className="remove-player" onClick={ () => props.removePlayer(props.id)}>✖</button>
//         { props.name }
//       </span>

//       <Counter />
//     </div>
//   );
// }

class App extends Component {
    constructor() {
      // super() needed to use React.Component 'this'
        super()
        this.state = {
          players: [
            {
              name: "Guil",
              score: 0,
              id: 1
            },
            {
              name: "Treasure",
              score: 0,
              id: 2
            },
            {
              name: "Ashley",
              score: 0,
              id: 3
            },
            {
              name: "James",
              score: 0,
              id: 4
            }
          ]
        };

      }
      lastPlayerId = 4;

      HandleScoreChange = ( index, newScore ) => {
        // pass setState() an object or callback function is going to fire no matter what
        this.setState( prevState => {
          return {
            score: prevState.players[index].score += newScore
          };
          //console.log('index: ' + index, 'newScore: ' + newScore);
        });
      }
// adding another player to players array of objects
  handleAddPlayer = ( name ) => {
    // '...' spread operator loads everything currently in state
    this.setState( prevState => {
      return {
        players: [
            ...prevState.players,
          {
            name: name,
            score: 0,
            id: this.lastPlayerId += 1
          }
        ]
      } 
    });
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  // gets the highest player score 
  getHighScore = () => {
    const scores = this.state.players.map( p => p.score );
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    } 
    return null;
  }






  render() {
    const highScore = this.getHighScore();

    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          players={this.state.players}
        />
  
        {/* Players list  passing props to player.js*/}
        {this.state.players.map( (player, index ) =>
          <Player 
            name={player.name}
            score={player.score}
            id={player.id}
            index={index}
            key={player.id.toString()}
            changeScore={this.HandleScoreChange}
            removePlayer={this.handleRemovePlayer}      
            isHighScore={highScore === player.score} // is player 'score' prop equal to the high score     
          />
        )}

        <Addplayer Addplayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;