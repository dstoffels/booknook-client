import React from 'react';
import { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import './NavBar.css';
import Searchbar from '../Searchbar/Searchbar.jsx';

const Navbar = ({ onSearch }) => {
	const { logoutUser, user } = useContext(AuthContext);
	const navigate = useNavigate();
	return (
		<header>
			<Link to="/">
				<div>BookNook</div>
			</Link>
			<Searchbar onSubmit={onSearch} />
			{user ? (
				<button onClick={logoutUser}>Logout</button>
			) : (
				<button onClick={() => navigate('/login')}>Login</button>
			)}
		</header>
	);
};

export default Navbar;
