import React, { useEffect } from "react";
import "./Home.css";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import LandingPage from "./main/Main";
import Services from "./services/Services";
import WhatWeDo from "./whatwedo/WhatWeDo";

const Home = () => {
	useEffect(() => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}, []);

	return (
		<div className='home'>
			<Navbar active={"home"} />
			<LandingPage />
			<WhatWeDo />
			<Services />
			<Footer />
		</div>
	);
};
export default Home;
