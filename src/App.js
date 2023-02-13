import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import User from './components/User/User';
import Header from './components/Header/Header';


function App() {
	return (
		<div className="App">
			<React.StrictMode>
				<BrowserRouter>
				<Header/>
					<Routes>
						<Route index path='/' element={<Home />} />
						<Route index path='/user' element={<User />} />
					</Routes>
				</BrowserRouter>
			</React.StrictMode>
		</div>
	);
}

export default App;
