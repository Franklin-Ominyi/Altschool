import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [loading2, setLoading2] = useState(false);
	const [page, setPage] = useState(1);
	const [error, setError] = useState(null);
	const [error2, setError2] = useState(null);
	const [searchInput, setSearchInput] = useState("");
	const [repoData, setRepoData] = useState(null);

	useEffect(() => {
		setData(null);
		setRepoData(null);
		setPage(1);
		setError(null);
		setError2(null);
	}, [searchInput]);

	const fetchUser = async () => {
		setLoading(true);
		try {
			let URL = `https://api.github.com/users/${searchInput}`;
			let response = await axios.get(URL);
			setData(response.data);
			setLoading(false);
		} catch (error) {
			setRepoData(null);
			setData(null);
			setError(error);
			setLoading(false);
		}
	};

	const getRepos = async () => {
		setLoading2(true);
		try {
			let response = await axios.get(`${data.repos_url}?per_page=10&page=${page}`);
			setRepoData(response.data);
			setLoading2(false);
		} catch (error) {
			setRepoData(null);
			setError2(error);
			setLoading2(false);
		}
	};

	useEffect(() => {
		getRepos();
	}, [page]);

	return (
		<AppContext.Provider
			value={{
				data,
				setData,
				loading,
				loading2,
				setLoading,
				page,
				setPage,
				fetchUser,
				error,
				setError,
				searchInput,
				setSearchInput,
				getRepos,
				repoData,
				error2,
				setError2,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
