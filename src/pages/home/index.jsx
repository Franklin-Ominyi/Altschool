import React, { useEffect } from "react";
import "./Home.css";

import Navbar from "../../components/navbar/Navbar";
import { useContext } from "react";
import { AppContext } from "../../components/context/AppContext";
import { Details } from "../details";
import ListRepos from "../repos/listrepos/ListRepos";

const Home = () => {
	useEffect(() => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}, []);
	const { searchInput, setSearchInput, fetchUser, loading, data, repoData } =
		useContext(AppContext);
	return (
		<div className='home'>
			<Navbar active={"home"} />
			<section className='content'>
				<main>
					<input
						type='text'
						className={`search-input ${searchInput.length <= 3 ? "disabled" : ""}`}
						placeholder='Github Username'
						value={searchInput}
						onChange={(e) => setSearchInput(e.target.value)}
					/>

					{!loading && (
						<span
							className={`btn ${searchInput.length <= 3 || loading ? "disabled" : ""}`}
							onClick={() => {
								if (searchInput.length > 3) fetchUser();
								else {
									return;
								}
							}}
						>
							Search
						</span>
					)}

					{loading && (
						<span className='loader2'>
							<i className='fa fa-spinner fa-spin ' aria-hidden='true'></i>
						</span>
					)}
				</main>
				{!loading && data && <Details />}
				{!loading && repoData && <ListRepos />}
			</section>
		</div>
	);
};
export default Home;
