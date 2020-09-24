import React from 'react'
import './app.css';
import {Route} from 'react-router-dom'

import About from './components/about'
import Home from './components/home'

// Main component handles all of the functionality of the GOL application 

export default function App() {
		return (
			<div>
				<Route exact path ='/' component={Home}/>
				<Route path ='/about' component={About} />
			</div>
	);
}

