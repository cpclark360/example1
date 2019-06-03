import React from 'react';
import PropTypes from 'prop-types';
const Stats = ( props ) => {

    const totalPlayers = props.players.length;
    // reduce method takes two arguments first 'accumulator' second 'first item' being added
    // start with '0' 
    const totalPoints = props.players.reduce( ( totalScore, player ) => {
        return totalScore + player.score;
    }, 0);

    return (
        <table className="stats">
            <tbody>
                <tr>
                    <td>Players:</td>
                    <td>{ totalPlayers }</td>
                </tr>
                <tr>
                    <td>Total Points:</td>
                    <td>{ totalPoints }</td>
                </tr>
            </tbody>
        </table>    
    );
}

Stats.prototype = {
    players: PropTypes.arrayOf(PropTypes.shape({
        score: PropTypes.number
    }))
};

export default Stats;