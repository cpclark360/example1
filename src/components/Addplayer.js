// { Component } needed for stateful class
import React, { Component } from 'react';

// To manage an input field's state, we need to build a "controlled component." 
// A controlled component renders a form element whose values are controlled by
//  React, with state.
// initi state for value of input
// listen for changes on the input to detect when value is updated
// Create an event handler that updates the value state

class Addplayer extends Component {
    constructor() {
        super()
        this.state = {
            value: ''
        };
    }
// handles stateful changes to value 
    handleValueChange = ( e ) => {
        this.setState({ value: e.target.value });
    }

    // Callback function to send the new player to App.js 
    handleSubmit = ( e ) => {
        e.preventDefault();
        this.props.Addplayer(this.state.value);
    }

    render() {
        console.log(this.state.value);
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleValueChange}
                    placeholder="Enter a player's nmae"
                />


                <input 
                    type="submit"
                    value="Add Player"
                />
            </form>
        );
    }
}

export default Addplayer;

