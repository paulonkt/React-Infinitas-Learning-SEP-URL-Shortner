import React from 'react';
import './App.css';
import { Feature, Footer, Header, Navbar, Statistics, } from './components';

function App() {
  return (
    <div className="App">
		<div className="navgation-bar">
			<Navbar/>
			<Header/>
			<Feature/>
			<Statistics/>
			<Footer/>
		</div>
    </div>
  );
}

export default App;
