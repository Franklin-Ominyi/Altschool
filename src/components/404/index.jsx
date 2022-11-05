import React from "react";
import "./NotFound.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

export default function NotFound() {
	return (
		<div className='not-found'>
			<div className='not-found-card'>
				<div className='logo-container'>
					<img alt='logo' src={logo} height='50px' />
				</div>

				<p className='not-found-title'>404 Error</p>

				<p className='not-found-desc '>
					The page your requested for does not exist. Use the link below to go back
					to homepage <br />
					<Link to='/'>Homepage</Link>
				</p>
			</div>
		</div>
	);
}
