import React from 'react';

import './BookCarousel.css';
import Book from '../Book/Book.jsx';

const BookCarousel = ({ label = '', books = [] }) => {
	if (!books.length) return null;

	const bookCards = books
		.filter(({ volumeInfo }) => volumeInfo.authors && volumeInfo.imageLinks)
		.map((book) => <Book key={book.id} book={book} />);

	return (
		<div>
			<h2>{label}</h2>
			<div className="carousel">{bookCards}</div>
		</div>
	);
};

export default BookCarousel;
