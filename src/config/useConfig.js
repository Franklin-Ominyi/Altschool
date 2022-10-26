import axios from "axios";
import { useContext } from "react";
import { AppContext } from "../components/context/AppContext";

const Config = async (
	URL = `https://randomuser.me/api/?page=3&results=10&seed=abc
`
) => {
	const { setData } = useContext(AppContext);

	let response = await axios.get(URL);
	console.log(response.data);
	return response.data.results;
};

export default Config;
