import React, { useEffect } from "react";
import "./Home.css";
import Navbar from "../../components/navbar/Navbar";
import { useContext } from "react";
import { AppContext } from "../../components/context/AppContext";
import { Details } from "../details";
import ListRepos from "../listrepos/ListRepos";
import swal from "sweetalert";

const Home = () => {
	useEffect(() => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}, []);
	const {
		searchInput,
		setSearchInput,
		fetchUser,
		loading,
		data,
		loading2,
		repoData,
		setError,
		error,
	} = useContext(AppContext);

	if (error) {
		if (error.message == "Request failed with status code 404") {
			swal({
				title: "Oops",
				text: "The username does not exit",
				icon: "error",
				closeOnClickOutside: false,
			}).then((ok) => {
				if (ok) {
					setError(null);
				} else {
					return;
				}
			});
		} else {
			swal({
				title: "Oops",
				text: error.message,
				icon: "error",
				closeOnClickOutside: false,
			}).then((ok) => {
				if (ok) {
					setError(null);
				} else {
					return;
				}
			});
		}
	}

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
				{!loading && data && !error && <Details />}
				{!loading && !loading2 && data && Boolean(repoData) && <ListRepos />}
			</section>
		</div>
	);
};
export default Home;
