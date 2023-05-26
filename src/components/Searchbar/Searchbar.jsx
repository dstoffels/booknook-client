import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Searchbar = ({ onSubmit = (query) => console.log(query) }) => {
	const [query, setQuery] = useState('');
	const navigate = useNavigate();

	const handleQuery = (e) => setQuery(e.target.value);

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate(`/search/${query}`);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type="search" value={query} onChange={handleQuery} placeholder="Search" />
		</form>
	);
};

export default Searchbar;
