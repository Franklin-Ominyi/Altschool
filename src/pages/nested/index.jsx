import React from "react";
import "./Nested.css";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { NestedComponents } from "./nestedcomponents/NestedComponents";

const Nested = () => {
	return (
		<div className='nested'>
			<Navbar active='nested' />
			<NestedComponents />
			<Footer />
		</div>
	);
};

export default Nested;
