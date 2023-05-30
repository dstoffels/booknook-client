import React, { useState } from 'react';
import './ReviewForm.css';
import RatingRadios from '../RatingRadios/RatingRadios.jsx';
import axios from 'axios';
import useAuth from '../../hooks/useAuth.js';

const ReviewForm = ({ book_id, fetchBookInfo = () => {} }) => {
	const { user, config } = useAuth();

	const [text, setText] = useState('');
	const [rating, setRating] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				'http://localhost:5000/api/reviews',
				{
					book_id,
					text,
					rating,
				},
				config,
			);
			if (response.status === 201) {
				setText('');
				setRating('');
				fetchBookInfo();
			}
		} catch (error) {
			console.error(error.response.data.messages);
		}
	};

	return (
		user && (
			<form className="review-form" onSubmit={handleSubmit}>
				<h3>Review this book</h3>
				<RatingRadios rating={rating} setRating={setRating} />
				<div className="input-field">
					<label>Written Review</label>
					<textarea type="text" rows={5} value={text} onChange={(e) => setText(e.target.value)} />
				</div>

				<button type="submit">Submit</button>
			</form>
		)
	);
};

export default ReviewForm;
