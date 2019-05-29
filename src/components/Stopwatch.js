import React, { Component } from 'react';

class Stopwatch extends Component {
    constructor(){
        super()
        this.state = {
            isRunning: false,
            elapsedTime: 0,
            previousTime: 0
        }
    }

    
    tick = ( ) => {
        if(this.state.isRunning){
            const now = Date.now();
            this.setState( prevState => ({
                previousTime: now,
                elapsedTime: prevState.elapsedTime + (now - prevState.previousTime)
            }));   
        }
    }

    handleStopwatch = ( ) => {
        this.setState( prevState => ({
            // !  changes the boolean value to the opposite value ex, from false to true
            isRunning: !prevState.isRunning,
        }));
        if (!this.state.isRunning){
            this.setState({ previousTime: Date.now()});
        }
    }

    componentDidMount() {
        this.intervalID = setInterval(() => this.tick(), 100);
    }


    render() {
        return (
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <span className="stopwatch-time">
                    {Math.floor(this.state.elapsedTime / 1000)}
                </span>
                <button onClick={this.handleStopwatch}>
                    {this.state.isRunning ? 'Stop' : 'Start' }
                </button>
                <button>Reset</button>
            </div>
        );
    }
}


export default Stopwatch;