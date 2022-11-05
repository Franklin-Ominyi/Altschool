import "./App.css";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./components/404";
import Test from "./components/TestErrorBoundary/index";
// import Loader from "./components/loader/index";
import { Details } from "./pages/nested/details/index";
import { Add } from "./pages/nested/add/index";
const Nested = React.lazy(() => import("./pages/nested/index"));

const App = () => {
	return (
		<Routes>
			<Route exact path='/' element={<Home />} />
			<Route path='/test' element={<Test />} />
			<Route
				path='/nested'
				element={
					<Suspense fallback={<p>Loading</p>}>
						<Nested />
					</Suspense>
				}
			>
				<Route path='details' element={<Details />} />
				<Route path='add' element={<Add />} />
			</Route>
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
};

export default App;
