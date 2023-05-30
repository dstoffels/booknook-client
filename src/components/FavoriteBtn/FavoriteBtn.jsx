import axios from 'axios';
import React from 'react';
import useAuth from '../../hooks/useAuth.js';

const FavoriteBtn = ({ book, bookInfo, fetchBookInfo }) => {
	const { config } = useAuth();

	const handleFav = async () => {
		try {
			const { title, imageLinks } = book.volumeInfo;
			const response = await axios.post(
				`http://localhost:5000/api/favorites`,
				{ book_id: book.id, title, thumbnail_url: imageLinks.thumbnail },
				config,
			);

			if (response.status === 201) fetchBookInfo();
		} catch (error) {
			console.error(error.response.data.msg);
		}
	};

	const handleUnfav = async () => {
		try {
			const response = await axios.delete(`http://localhost:5000/api/favorites/${book.id}`, config);
			if (response.status === 204) fetchBookInfo();
		} catch (e) {
			console.error(e.response.data);
		}
	};

	return bookInfo.is_user_favorite ? (
		<button onClick={handleUnfav}>&#x2713; Favorite</button>
	) : (
		<button onClick={handleFav}>Favorite</button>
	);
};

export default FavoriteBtn;
