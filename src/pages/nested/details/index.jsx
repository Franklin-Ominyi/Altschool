import React from "react";

export const Details = () => {
	const style = {
		marginTop: "3.5rem",
		border: "2px solid #ed1c24",
		backgroundColor: "#ed1c24",
		color: "#fff",
		height: "200px",
		borderRadius: "8px",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	};
	return (
		<div className='details' style={style}>
			This is Details page
		</div>
	);
};
