import React from 'react';
import Review from '../Review/Review.jsx';

const Reviews = ({ reviews = [] }) => {
	reviews = reviews.map((review) => <Review review={review} />);

	return <div>{reviews}</div>;
};

export default Reviews;
