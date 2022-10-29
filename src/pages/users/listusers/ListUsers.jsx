import React from "react";
import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import Loader from "../../../components/loader";
import Pagination from "../../../components/pagination";
import "./ListUsers.css";
import ErrorComponent from "../../../components/error";

export default function ListUsers() {
	const { data, page, setPage, loading, error } = useContext(AppContext);
	if (loading) {
		return <Loader />;
	} else if (!loading && error) {
		return <ErrorComponent message={error.message} />;
	} else {
		return (
			<div className='list-users'>
				<div className='info'>
					<h2>Altschool Users</h2>
					<p>Page {page}</p>
				</div>

				{data.map((item, index) => (
					<div className='list-item' key={index}>
						<img src={`${item.picture.thumbnail}`} alt='profile' />
						<div>
							<p>
								{item.name.title} {item.name.first} {item.name.last}
							</p>
							<p className='email'>{item.email}</p>
						</div>
					</div>
				))}
				<div className='pagination-wrapper'>
					<Pagination page={page} setPage={setPage} loading={loading} />
				</div>
			</div>
		);
	}
}
