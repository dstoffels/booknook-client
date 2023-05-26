import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BookPage = ({}) => {
	const { book_id } = useParams();
	const [book, setBook] = useState(null);

	const fetchBook = async () => {
		try {
			const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${book_id}`);
			setBook(response.data);
		} catch (error) {
			const { status, message } = error.response.data.error;
			console.error(`${status}: ${message}`);
		}
	};

	useEffect(() => fetchBook(), [book_id]);

	if (book) {
		const { title, imageLinks } = book.volumeInfo;

		const authors = book.volumeInfo.authors?.map((author) => (
			<h4 key={`${book.id}-${author}`}>{author}</h4>
		));

		return (
			<div>
				<img src={imageLinks.thumbnail} alt="" />
				<h1>{title}</h1>
				<div>{authors}</div>
			</div>
		);
	} else return null;
};

export default BookPage;
