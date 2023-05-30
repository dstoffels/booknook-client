import React from 'react';
import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

import axios from 'axios';
import BookCarousel from '../../components/BookCarousel/BookCarousel.jsx';
import { useParams } from 'react-router-dom';

const HomePage = ({}) => {
	const { query } = useParams();
	const [user, token] = useAuth();

	const [books, setBooks] = useState([]);
	const [searchResults, setSearchResults] = useState([]);

	const fetchFeatured = async () => {
		const response = await axios.get('https://www.googleapis.com/books/v1/volumes?q=intitle:dogs');
		setBooks(response.data.items);
	};

	const handleSearch = async () => {
		if (query) {
			try {
				const response = await axios.get(
					`https://www.googleapis.com/books/v1/volumes?q=intitle:${query}&maxResults=40`,
				);
				setSearchResults(response.data.items);
			} catch (error) {
				const { code, message } = error.response.data.error;
				console.error(`${code}: ${message}`);
			}
		} else {
			setSearchResults([]);
		}
	};

	useEffect(() => fetchFeatured(), []);
	useEffect(() => handleSearch(), [query]);

	return (
		<div>
			<BookCarousel books={searchResults} label="Search Results" />
			<BookCarousel books={books} label="Featured" />
			{user && <BookCarousel label="Favorites" />}
		</div>
	);
};

export default HomePage;
