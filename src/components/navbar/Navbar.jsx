import "./Navbar.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

const Navbar = ({ active }) => {
	const [toggleShowNav, setToggleShowNav] = useState(false);

	const toggleNavDisplay = () => {
		setToggleShowNav((e) => !e);
	};

	useEffect(() => {
		document
			.querySelector(".sidebar .smooth-scroll")
			.addEventListener("click", toggleNavDisplay);
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
				<Link to='/users' className={active === "users" ? " active" : ""}>
					Users
				</Link>
				<Link to={"/test"}>Test Error Boundary</Link>
				<Link className='smooth-scroll'>About</Link>
			</div>
			<nav className='nav-container navbar'>
				<div className='wrapper'>
					<div className='brand-logo'>
						<h1
							className='semi-bold'
							style={{ color: "#ed1c24", fontSize: "1.4rem" }}
						>
							<Link to='/'>
								<img src={logo} alt='logo' />
							</Link>
						</h1>
					</div>
					<ul className='desktop nav-links'>
						<li>
							<Link to='/' className={active === "home" ? " active" : ""}>
								Home
							</Link>
						</li>
						<li>
							<Link to={"/users"} className={active === "users" ? "active" : ""}>
								Users
							</Link>
						</li>
						<li>
							<Link to={"/test"}>Test Error Boundary</Link>
						</li>
						<li>
							<Link className='smooth-scroll'>About</Link>
						</li>
					</ul>

					<div className='desktop nav-cta-buttons'>
						<button className='nav-btn'>Login</button>
						<button className='nav-btn'>Register</button>
					</div>

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
