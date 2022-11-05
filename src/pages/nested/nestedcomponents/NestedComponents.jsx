import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./NestedComponents.css";

export const NestedComponents = () => {
	let { pathname } = useLocation();

	return (
		<div className='nested-components'>
			<div className='top-bar'>
				<Link to='/nested' className={pathname === "/nested" ? "active" : ""}>
					Default
				</Link>
				<Link
					to='/nested/details'
					className={pathname === "/nested/details" ? "active" : ""}
				>
					Details
				</Link>
				<Link
					to='/nested/add'
					className={pathname === "/nested/add" ? "active" : ""}
				>
					Add
				</Link>
			</div>
			<div className='card'>This route have nested routes</div>
			<div className='outlet-wrapper'>
				<Outlet />
			</div>
		</div>
	);
};
