import React from "react";
import "./Error.css";
import logo from "../../assets/logo.svg";

export default function ErrorComponent({ message }) {
	return (
		<div className='error-component'>
			<div className='error-component-card'>
				<div className='logo-container'>
					<img alt='logo' src={logo} height='50px' />
				</div>

				<p className='error-component-title '>Oops an error occured</p>

				<p className='error-component-desc '>{message}</p>
			</div>
		</div>
	);
}
