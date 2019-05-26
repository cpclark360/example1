import React from 'react';
import Stats from './Stats';

// Creating a React stateless component called 'Header'
const Header = ( props ) => {
    
   
   

    return (
      <header>
        <Stats players={ props.players } />
        <h1>{ props.title }</h1>
      </header>
    );
  }
  


export default Header;