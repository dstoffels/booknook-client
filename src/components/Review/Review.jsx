import React from 'react';

const Review = ({ review }) => {
	const { rating, text, user } = review;

	return (
		<div className="review-card">
			<h4>
				{user.username} ({rating} stars)
			</h4>
			<div>{text}</div>
		</div>
	);
};

export default Review;
