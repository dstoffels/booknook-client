// General Imports
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

// Pages Imports
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';

// Component Imports
import Navbar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

// Util Imports
import PrivateRoute from './utils/PrivateRoute';
import BookPage from './pages/BookPage/BookPage.jsx';

function App() {
	return (
		<div>
			<Navbar />
			<main>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/search/:query" element={<HomePage />} />
					<Route path="/book/:book_id" element={<BookPage />} />
					<Route path="/register" element={<RegisterPage />} />
					<Route path="/login" element={<LoginPage />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
