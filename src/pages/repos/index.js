import React, { useEffect } from "react";
import "./Repos.css";

import Navbar from "../../components/navbar/Navbar";

import ListRepos from "./listrepos/ListRepos";

export default function Users() {
	useEffect(() => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}, []);

	return (
		<div className='users'>
			<Navbar />
			<ListRepos />
		</div>
	);
}
