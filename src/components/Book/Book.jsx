import React from 'react';
import './Book.css';
import { useNavigate } from 'react-router-dom';

const Book = ({ book }) => {
	const navigate = useNavigate();

	const authors = book.volumeInfo.authors?.map((author) => (
		<h6 className="book-author" key={`${book.id}-${author}`}>
			{author}
		</h6>
	));

	const handleClick = () => navigate(`/book/${book.id}`);

	return (
		<div onClick={handleClick} className="book-card">
			<div className="img-wrapper">
				<img src={book.volumeInfo.imageLinks?.thumbnail} alt="" />
			</div>
			<h5>{book.volumeInfo.title}</h5>

			<div>{authors}</div>
		</div>
	);
};

export default Book;
