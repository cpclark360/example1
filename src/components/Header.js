import React from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

// Creating a React stateless component called 'Header'
const Header = ( {players, title} ) => {
  //   Destructuring Props props.players, props.title
  //const { players, title } = props;
    return (
      <header>
        <Stats players={ players } />
        <h1>{ title }</h1>
        <Stopwatch />
      </header>
    );
  }
  
Header.propTypes = {
  title: PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.object)
};

export default Header;