import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Player from './components/Player';

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

class App extends React.Component {
  state = {
    players: [
      {
        name: "Guil",
        id: 1
      },
      {
        name: "Treasure",
        id: 2
      },
      {
        name: "Ashley",
        id: 3
      },
      {
        name: "James",
        id: 4
      }
    ]
  };

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          totalPlayers={this.state.players.length} 
        />
  
        {/* Players list */}
        {this.state.players.map( player =>
          <Player 
            name={player.name}
            id={player.id}
            key={player.id.toString()} 
            removePlayer={this.handleRemovePlayer}           
          />
        )}
      </div>
    );
  }
}

export default App;