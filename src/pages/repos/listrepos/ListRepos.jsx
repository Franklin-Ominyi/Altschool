import React, { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../../../components/context/AppContext";
// import Loader from "../../../components/loader";
import Pagination from "../../../components/pagination";
import "./ListRepos.css";

export default function ListRepos() {
	const { repoData, page, setPage, loading, data, loading2 } =
		useContext(AppContext);

	return (
		<div className='list-users'>
			<div className='info'>
				<h2>Repositories</h2>
				<p>Page {page}</p>
			</div>
			{/* {loading2 && !repoData && <Loader />} */}
			{repoData &&
				repoData?.map((item, index) => (
					<div className='list-item' key={index}>
						<div>
							<p>
								<a href={item.html_url} target='_blank' rel='noreferrer'>
									{item.name}
								</a>
							</p>
							<p className='date'>
								{new Date(item.created_at).getDate()}/
								{new Date(item.created_at).getMonth()}/
								{new Date(item.created_at).getFullYear()}
							</p>
						</div>
					</div>
				))}
			{data?.public_repos > 30 && (
				<div className='pagination-wrapper'>
					<Pagination
						page={page}
						setPage={setPage}
						loading={loading}
						total={Math.round(data?.public_repos / 30)}
					/>
				</div>
			)}
		</div>
	);
}
