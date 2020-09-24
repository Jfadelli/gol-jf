import React from 'react'
import { ButtonToolbar, Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import About from './about'

export default class Buttons extends React.Component {

	handleSelect = (evt) => {
		this.props.gridSize(evt);

	}
	handleSpeedSelect = (evt) => {
		this.props.playSpeed(evt);
	}

	handleClick = () => {
		console.log('click')
	}

	render() {
		return (
			<div className="center">
				<ButtonToolbar>
					<button className="btn btn-default" onClick={this.props.playButton}>
						Play
					</button>
					<button className="btn btn-default" onClick={this.props.pauseButton}>
					  Pause
					</button>
					<button className="btn btn-default" onClick={this.props.clear}>
					  Clear
					</button> 
					<button className="btn btn-default" onClick={this.props.seed}>
					  Seed
					</button>
          			<button className="btn btn-default" onClick={this.props.stepForward}>
					  Step Forward
					</button>
					<DropdownButton id="dropdown-item-button" title="Speed">
						<Dropdown.Item className="btn btn-secondary" onSelect={this.handleSpeedSelect} eventKey="10">Fast</Dropdown.Item>
						<Dropdown.Item className="btn btn-secondary" onSelect={this.handleSpeedSelect} eventKey="11">Normal</Dropdown.Item>
						<Dropdown.Item className="btn btn-secondary" onSelect={this.handleSpeedSelect} eventKey="12">Slow</Dropdown.Item>
						<Dropdown.Item className="btn btn-secondary" onSelect={this.handleSpeedSelect} eventKey="13">Super Slow</Dropdown.Item>
					</DropdownButton>


					<DropdownButton id="dropdown-item-button" title="Size">
						<Dropdown.Item className="btn btn-secondary" onSelect={this.handleSelect} eventKey="1">20x10</Dropdown.Item>
						<Dropdown.Item className="btn btn-secondary" onSelect={this.handleSelect} eventKey="2">50x30</Dropdown.Item>
						<Dropdown.Item className="btn btn-secondary" onSelect={this.handleSelect} eventKey="3">70x50</Dropdown.Item>
					</DropdownButton>
					<Link to='/about'>
						<button
						className="btn btn-default" >
							About
						</button>
					</Link>
				</ButtonToolbar>

			</div>
			)
	}
}