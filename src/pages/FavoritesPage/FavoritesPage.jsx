import React, { useEffect, useState } from 'react';
import Favorite from '../../components/Favorite/Favorite.jsx';
import axios from 'axios';

const FavoritesPage = ({}) => {
	const [favs, setFavs] = useState([]);

	const fetchFavs = async () => {
		try {
			const response = await axios.get(`http://localhost:5000/api/favorites`);
			setFavs(response.data);
		} catch (error) {
			const { status, message } = error.response.data.error;
			console.error(`${status}: ${message}`);
		}
	};

	useEffect(() => fetchFavs(), []);

	const favCards = favs.map((fav) => <Favorite fav={fav} />);

	return (
		<div>
			<h1>Favorites</h1>
			<div>{favCards}</div>
		</div>
	);
};

export default FavoritesPage;
