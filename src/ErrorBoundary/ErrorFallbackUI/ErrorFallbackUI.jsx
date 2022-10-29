import React from "react";
import "./ErrorFallbackUI.css";
import logo from "../../assets/logo.svg";

export default function ErrorFallbackUI() {
	return (
		<div className='error-fallbackui'>
			<div className='error-fallbackui-card'>
				<div className='logo-container'>
					<img alt='logo' src={logo} height='50px' />
				</div>

				<p className='error-fallbackui-title '>Site is temporary down</p>

				<p className='error-fallbackui-desc '>
					Dear esteemed customer, we are sorry to inform you that our site is
					temporary down due to technical issues, which our engineering team is
					already tackling. We are sorry for any inconvenices this might cause you.
				</p>
			</div>
		</div>
	);
}
