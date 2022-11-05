import React from "react";
import "./Nested.css";
import Navbar from "../../components/navbar/Navbar";
import { NestedComponents } from "./nestedcomponents/NestedComponents";

const Nested = () => {
	return (
		<div className='nested'>
			<Navbar active='nested' />
			<NestedComponents />
		</div>
	);
};

export default Nested;
