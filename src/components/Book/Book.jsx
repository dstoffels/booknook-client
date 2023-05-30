import React from 'react';
import './Book.css';
import { useNavigate } from 'react-router-dom';

const Book = ({ book }) => {
	const navigate = useNavigate();

	const handleClick = () => navigate(`/book/${book.id}`);

	return (
		<div onClick={handleClick} className="book-card">
			<div className="img-wrapper">
				<img src={book.volumeInfo.imageLinks?.thumbnail} alt="" />
			</div>
			<h5>{book.volumeInfo.title}</h5>
		</div>
	);
};

export default Book;
