import React from 'react'
import './app.css';
import Grid from './components/Grid'
import Buttons from './components/Buttons'

// Main component handles all of the functionality of the GOL application 
export default class App extends React.Component {
	// Constructor class handles the state and initial state
	constructor() {
		super();
		this.speed = 100;
		this.rows = 30;
		this.cols = 50;

		this.state = {
			generation: 0,
			gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
		}
	}

	
	selectBox = (row, col) => {
		let gridCopy = arrayClone(this.state.gridFull); // copy the array (function below)
		gridCopy[row][col] = !gridCopy[row][col]; 		// check for differences in copied array
		this.setState({ 								// set buffered array to the current array
			gridFull: gridCopy
		});
	}

	seed = () => {
		let gridCopy = arrayClone(this.state.gridFull);		// copy the array
		for (let i = 0; i < this.rows; i++) {				// doulbe nested for loop to cover both axies of the array
			for (let j = 0; j < this.cols; j++) {
				if (Math.floor(Math.random() * 4) === 1) { 	// 1/4 chance each for random num === 1
					gridCopy[i][j] = true;					// if true, set sell to true
				}
			}
		}
		this.setState({										// set bufferd array to current array
			gridFull: gridCopy
		});
	}

	playButton = () => { 
		// let run = true
		clearInterval(this.intervalId);
		this.intervalId = setInterval(this.play, this.speed);
	}

	pauseButton = () => {
		clearInterval(this.intervalId);
	}

	clear = () => {
		var grid = Array(this.rows).fill().map(() => Array(this.cols).fill(false));
		this.setState({
			gridFull: grid,
      generation: 0,
      spawned: 0,
      dead: 0,
		});
	this.pauseButton();
  }

  //Switches
	gridSize = (size) => { // switch handles grid sizes, referenced in buttons
		switch (size) {
			case "1":
				this.cols = 20;
				this.rows = 10;
			break;
			case "2":
				this.cols = 50;
				this.rows = 30;
			break;
			default:
				this.cols = 70;
				this.rows = 50;
		}
    this.clear();
	}

	playSpeed = (speed) => { // switch handles play speeds, referenced in buttons
		this.pauseButton()
		switch (speed) {
			case "10":
				this.speed = 10
			break
			default:
				this.speed = 250
			break
			case "12":
				this.speed = 1000
			break
			case "13":
				this.speed = 3000
		}
		this.playButton();
	}

	play = () => {
        let g = this.state.gridFull;                                                        // assign array to variable
		let g2 = arrayClone(this.state.gridFull);                                           // buffer the array

		for (let i = 0; i < this.rows; i++) {                                               // double nested for loop to iterate through array
		  for (let j = 0; j < this.cols; j++) {
		    let count = 0;                                                                  // count neighbor cells
		    if (i > 0) if (g[i - 1][j]) count++;                                            // logic to check neighbors alive or dead
		    if (i > 0 && j > 0) if (g[i - 1][j - 1]) count++;
		    if (i > 0 && j < this.cols - 1) if (g[i - 1][j + 1]) count++;
		    if (j < this.cols - 1) if (g[i][j + 1]) count++;
		    if (j > 0) if (g[i][j - 1]) count++;
		    if (i < this.rows - 1) if (g[i + 1][j]) count++;
		    if (i < this.rows - 1 && j > 0) if (g[i + 1][j - 1]) count++;
		    if (i < this.rows - 1 && j < this.cols - 1) if (g[i + 1][j + 1]) count++;
		    if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = false;                      // logic to test if cell should die
		    if (!g[i][j] && count === 3) g2[i][j] = true;                                   // logic to test if cell should become alive
		  }
		}
		this.setState({
		  gridFull: g2,
      generation: this.state.generation + 1,
    //   spawned: this.state.spawned,
    //   dead: this.state.dead
		});
    }
    
    stepForward = () => {                                                                   // same as above, but implemented without repeating
        let g = this.state.gridFull;
        let g2 = arrayClone(this.state.gridFull);
    
        for (let i = 0; i < this.rows; i++) {
          for (let j = 0; j < this.cols; j++) {
            let count = 0;
            if (i > 0) if (g[i - 1][j]) count++;
            if (i > 0 && j > 0) if (g[i - 1][j - 1]) count++;
            if (i > 0 && j < this.cols - 1) if (g[i - 1][j + 1]) count++;
            if (j < this.cols - 1) if (g[i][j + 1]) count++;
            if (j > 0) if (g[i][j - 1]) count++;
            if (i < this.rows - 1) if (g[i + 1][j]) count++;
            if (i < this.rows - 1 && j > 0) if (g[i + 1][j - 1]) count++;
            if (i < this.rows - 1 && j < this.cols - 1) if (g[i + 1][j + 1]) count++;
            if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = false;
            if (!g[i][j] && count === 3) g2[i][j] = true;
          }
        }
        this.setState({
          gridFull: g2,
          generation: this.state.generation + 1
        });
      }

	componentDidMount() {   // seeds grid on mount
		this.seed();
	}
	
	render() {  // html for application
		
		return (
			<div>
				<h1>Conway's "Game of Life"</h1>
				<Buttons
					playButton={this.playButton}
					pauseButton={this.pauseButton}
					clear={this.clear}
					seed={this.seed}
          			gridSize={this.gridSize}
					stepForward={this.stepForward}
					playSpeed={this.playSpeed}
				/>
				<Grid
					gridFull={this.state.gridFull}
					rows={this.rows}
					cols={this.cols}
					selectBox={this.selectBox}
				/>
				<h2>Generations: {this.state.generation}</h2>
				{/* <h2>Spawned: {this.state.spawned} Dead: {this.state.dead}</h2> */}
			</div>
		);
	}
}

function arrayClone(arr) {
	return JSON.parse(JSON.stringify(arr)); // clones the array by  leveraging stringify
}