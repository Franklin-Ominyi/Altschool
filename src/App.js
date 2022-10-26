import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./components/404";
import Users from "./pages/users/index";
import Test from "./components/TestErrorBoundary/index";

const App = () => {
	return (
		<Routes>
			<Route exact path='/' element={<Home />} />
			<Route path='/users' element={<Users />} />
			<Route path='/test' element={<Test />} />|
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
};

export default App;
