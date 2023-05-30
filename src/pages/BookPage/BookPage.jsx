import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewForm from '../../components/ReviewForm/ReviewForm.jsx';
import useAuth from '../../hooks/useAuth.js';
import Reviews from '../../components/Reviews/Reviews.jsx';

const BookPage = ({}) => {
	const { book_id } = useParams();
	const [book, setBook] = useState(null);
	const [bookInfo, setBookInfo] = useState(null);

	const { config } = useAuth();

	const fetchBook = async () => {
		try {
			const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${book_id}`);
			setBook(response.data);
		} catch (error) {
			const { status, message } = error.response.data.error;
			console.error(`${status}: ${message}`);
		}
	};

	const fetchBookInfo = async () => {
		try {
			const response = await axios.get(`http://localhost:5000/api/books/${book_id}`, config);
			setBookInfo(response.data);
		} catch (error) {
			console.error(error.response.data.msg);
		}
	};

	useEffect(() => {
		fetchBook();
		fetchBookInfo();
	}, [book_id]);

	console.log(bookInfo);

	if (book && bookInfo) {
		const { title, imageLinks, description } = book.volumeInfo;

		const authors = book.volumeInfo.authors?.map((author) => (
			<h4 key={`${book.id}-${author}`}>{author}</h4>
		));

		return (
			<div>
				<img src={imageLinks.thumbnail} alt="" />
				<h1>{title}</h1>
				<div>{authors}</div>
				<h3>Avg. Rating: {bookInfo.average_rating}</h3>
				<div>{description}</div>
				<ReviewForm book_id={book_id} fetchBookInfo={fetchBookInfo} />
				<Reviews reviews={bookInfo.reviews} />
			</div>
		);
	} else return null;
};

export default BookPage;
