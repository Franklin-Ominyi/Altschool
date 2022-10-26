import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div>
			<p>Not found</p>
			<Link to='/'>Homepage</Link>
			<Link to='/pagination'>Pagination</Link>
		</div>
	);
};

export default NotFound;
