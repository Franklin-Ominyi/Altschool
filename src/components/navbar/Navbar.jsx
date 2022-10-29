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
			.querySelector(".sidebar a")
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
				<Link to={"/nested"} className={active === "nested" ? " active" : ""}>
					Nested Component
				</Link>
			</div>
			<nav className='nav-container navbar'>
				<div className='wrapper'>
					<div className='brand-logo'>
						<Link to='/'>
							<img src={logo} alt='logo' />
						</Link>
					</div>
					<ul className='desktop nav-links'>
						<li>
							<Link to='/' className={active === "home" ? " active" : ""}>
								Home
							</Link>
						</li>
						<li>
							<Link to='/users' className={active === "users" ? "active" : ""}>
								Users
							</Link>
						</li>
						<li>
							<Link to='/test' className={active === "test" ? "active" : ""}>
								Test Error Boundary
							</Link>
						</li>
						<li>
							<Link to='/nested' className={active === "nested" ? "active" : ""}>
								Nested Components
							</Link>
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
