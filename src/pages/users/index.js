import React, { useEffect } from "react";
import "./Users.css";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import ListUsers from "./listusers/ListUsers";

export default function Users() {
	useEffect(() => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}, []);

	return (
		<div className='users'>
			<Navbar active={"users"} />
			<ListUsers />
			<Footer />
		</div>
	);
}
