import React, { useContext } from "react";
import "./Details.css";
import { AppContext } from "../../components/context/AppContext";
import { Link } from "react-router-dom";
import swal from "sweetalert";

export const Details = () => {
	const { data, getRepos, repoData, loading2, error2, setError2, loading } =
		useContext(AppContext);
	let date = new Date(data.created_at);

	if (error2) {
		swal({
			title: "Oops",
			text: error2.message,
			icon: "error",
			closeOnClickOutside: false,
		}).then((ok) => {
			if (ok) {
				setError2(null);
			} else {
				return;
			}
		});
	}

	return (
		<div className='details'>
			<div className='img-container'>
				<img src={data.avatar_url} alt='' />
			</div>
			<div className='user-details'>
				<div className='item'>
					<p>Name:</p>
					<p>{data.name}</p>
				</div>
				<div className='item'>
					<p>Location:</p>
					<p>{data.location}</p>
				</div>
				<div className='item'>
					<p>Bio:</p>
					<p>{data.bio}</p>
				</div>
				<div className='item'>
					<p>Public Repos:</p>
					<p>{data.public_repos}</p>
				</div>
				<div className='item'>
					<p>Followers:</p>
					<p>{data.followers}</p>
				</div>
				<div className='item'>
					<p>Following:</p>
					<p>{data.following}</p>
				</div>
				<div className='item'>
					<p>Joined:</p>
					<p>
						{date.getDate()}/{date.getMonth()}/{date.getFullYear()}
					</p>
				</div>

				{!loading && !loading2 && !repoData && (
					<div className='btn-container'>
						<Link onClick={getRepos}>Repositories</Link>
					</div>
				)}

				{loading2 && (
					<div className='btn-container'>
						<div className='loader'>
							<i className='fa fa-spinner fa-spin' aria-hidden='true'></i>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
