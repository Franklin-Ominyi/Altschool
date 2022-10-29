import React from "react";

export const Add = () => {
	const style = {
		marginTop: "3.5rem",
		border: "2px solid #ed1c24",
		height: "200px",
		borderRadius: "8px",
		display: "flex",
		flexDirection: "column",
		gap: 10,
		alignItems: "center",
		justifyContent: "center",
	};

	const inputStyle = {
		padding: "10px",
		borderRadius: "8px",
		border: "2px solid #ddd",
		outline: "none",
	};
	return (
		<div className='add' style={style}>
			<p>Add user </p>
			<div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
				<input style={inputStyle} type='text' placeholder='User name' />
				<p
					style={{
						color: "#fff",
						backgroundColor: "#ed1c24",
						border: "1px solid #ddd",
						padding: "10px",
						borderRadius: "8px",
						cursor: "pointer",
					}}
				>
					Add
				</p>
			</div>
		</div>
	);
};
