import React, { Fragment } from "react";
import "./Nested.css";
import Navbar from "../../components/navbar/Navbar";
import { NestedComponents } from "./nestedcomponents/NestedComponents";
import Helmet from "react-helmet";

const Nested = () => {
	return (
		<Fragment>
			<Helmet>
				<meta charSet='utf-8' />
				<title>Nested Routes | GHP | Alegu Franklin Ominyi</title>
				<link rel='canonical' href='/nested' />
			</Helmet>
			<div className='nested'>
				<Navbar active='nested' />
				<NestedComponents />
			</div>
		</Fragment>
	);
};

export default Nested;
