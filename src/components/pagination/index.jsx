import React, { useEffect } from "react";
import { useState } from "react";
import "./Pagination.css";

function Pagination({ page, setPage, loading }) {
	const [index, setIndex] = useState(page);
	const [total, setTotal] = useState(1000);
	const [indexForNumbers, setIndexForNumbers] = useState(index);
	const [indexIsTotal, setIndexIsTotal] = useState(() => {
		return indexForNumbers === total ? true : false;
	});

	const prev = () => {
		if (loading) return;
		if (index > 1) {
			setIndex(index - 1);
		}
		return;
	};

	const next = () => {
		if (loading) return;
		if (index < total) {
			setIndex(index + 1);
			if (index + 5 < total) {
				setIndexForNumbers(parseInt(index) + 1);
			}
		}
		return;
	};

	useEffect(() => {
		setPage(index);
		if (index + 2 >= total) {
			setIndexForNumbers(indexForNumbers);
		} else if (index <= 0) {
			setIndexForNumbers(indexForNumbers - 3);
		} else {
			setIndexForNumbers(index);
		}
	}, [index]);

	const handleBtn = (e) => {
		if (loading) return;
		setIndex(parseInt(e.target.textContent));
	};

	return (
		<div id='pagination-wrapper'>
			<div id='content'>
				<div>
					<button
						className='control'
						disabled={index <= 1 || loading}
						onClick={prev}
					>
						<i className='fa fa-arrow-circle-left' aria-hidden='true'></i>
					</button>
				</div>
				<div id='buttons-container'>
					{!indexIsTotal && (
						<>
							{indexForNumbers - 2 <= total && indexForNumbers - 2 > 0 && (
								<button
									className={index == indexForNumbers - 2 ? "active" : ""}
									onClick={(e) => handleBtn(e)}
									disabled={loading}
								>
									{indexForNumbers - 2}
								</button>
							)}
							{indexForNumbers - 1 <= total && indexForNumbers - 1 > 0 && (
								<button
									className={index == indexForNumbers - 1 ? "active" : ""}
									onClick={(e) => handleBtn(e)}
								>
									{indexForNumbers - 1}
								</button>
							)}
							{indexForNumbers <= total && (
								<button
									className={index == indexForNumbers ? "active" : ""}
									onClick={(e) => handleBtn(e)}
								>
									{indexForNumbers}
								</button>
							)}
							{indexForNumbers + 1 <= total && (
								<button
									className={index == indexForNumbers + 1 ? "active" : ""}
									onClick={(e) => handleBtn(e)}
								>
									{indexForNumbers + 1}
								</button>
							)}
							{indexForNumbers + 2 <= total && (
								<button
									className={index == indexForNumbers + 2 ? "active" : ""}
									onClick={(e) => handleBtn(e)}
								>
									{indexForNumbers + 2}
								</button>
							)}
						</>
					)}
				</div>
				<div id='next'>
					<button className='control' onClick={next} disabled={total === index}>
						<i className='fa fa-arrow-circle-right' aria-hidden='true'></i>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Pagination;
