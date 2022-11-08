import "./Navbar.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ active }) => {
	const [toggleShowNav, setToggleShowNav] = useState(false);

	const toggleNavDisplay = () => {
		setToggleShowNav((e) => !e);
	};

	useEffect(() => {
		document
			.querySelector(".mobile-menu")
			.addEventListener("click", toggleNavDisplay);
	}, []);

	return (
		<>
			<div className={toggleShowNav ? "sidebar show" : "sidebar"}>
				<a href='/' className={active === "home" ? "active" : ""}>
					Home
				</a>
				<Link to={"/nested"} className={active === "nested" ? "active" : ""}>
					Nested Routes
				</Link>
				<Link to={"/test"}>Test Error Boundary</Link>
			</div>
			<nav className='nav-container navbar'>
				<div className='wrapper'>
					<div className='brand'>
						<Link to='/'>Github Profiler</Link>
					</div>
					<ul className='desktop nav-links'>
						<li>
							<Link to='/' className={active === "home" ? " active" : ""}>
								Home
							</Link>
						</li>

						<li>
							<Link to='/nested' className={active === "nested" ? " active" : ""}>
								Nested Routes
							</Link>
						</li>

						<li>
							<Link to={"/test"}>Test Error Boundary</Link>
						</li>
					</ul>

					<div className='mobile-menu'>
						{!toggleShowNav && <i className='fa fa-bars' aria-hidden='true'></i>}
						{toggleShowNav && (
							<i
								className='fa fa-times'
								style={{ color: "#ed1c24" }}
								aria-hidden='true'
							></i>
						)}
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
