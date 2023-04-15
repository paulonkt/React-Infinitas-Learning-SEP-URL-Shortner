import React from 'react';
import './App.css';
import { Cta, Feature, Footer, Header, Navbar, Statistics, } from './components';

function App() {
  return (
    <div className="sep__app">
		<div className="navgation-bar">
			<div className='sep__boxed'>
				<Navbar/>
				<Header/>
				<Feature/>
			</div>
			<div className='sep__fluid'>
				<Statistics/>
				<Cta/>
				<Footer/>
			</div>
		</div>
    </div>
  );
}

export default App;
