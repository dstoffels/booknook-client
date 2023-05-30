import React from 'react';

import { useNavigate } from 'react-router-dom';
const Favorite = ({ fav }) => {
	const navigate = useNavigate();

	const handleClick = () => navigate(`/book/${fav.book_id}`);

	return (
		<div onClick={handleClick} className="book-card">
			<div className="img-wrapper">
				<img src={fav.thumbnail_url} alt="" />
			</div>
			<h5>{fav.title}</h5>
		</div>
	);
};

export default Favorite;
