import React, { useState } from 'react';
import './RatingRadios.css';

const RatingRadios = ({ rating, setRating }) => {
	const handleChange = (e) => setRating(e.target.value);

	return (
		<div className="rating-radios">
			<label>Rating</label>
			<div>
				<label>1</label>
				<input
					type="radio"
					checked={rating == 1}
					name="rating"
					value={1}
					onChange={handleChange}
					required
				/>
				<label>2</label>
				<input
					type="radio"
					checked={rating == 2}
					name="rating"
					value={2}
					onChange={handleChange}
					required
				/>
				<label>3</label>
				<input
					type="radio"
					checked={rating == 3}
					name="rating"
					value={3}
					onChange={handleChange}
					required
				/>
				<label>4</label>
				<input
					type="radio"
					checked={rating == 4}
					name="rating"
					value={4}
					onChange={handleChange}
					required
				/>
				<label>5</label>
				<input
					type="radio"
					checked={rating == 5}
					name="rating"
					value={5}
					onChange={handleChange}
					required
				/>
			</div>
		</div>
	);
};

export default RatingRadios;
