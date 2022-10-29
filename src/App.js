import React, { Suspense } from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";

import { Details } from "./pages/nested/details";
import Loader from "./components/loader";
import { Add } from "./pages/nested/add";
const Home = React.lazy(() => import("./pages/home"));
const NotFound = React.lazy(() => import("./components/404"));
const Users = React.lazy(() => import("./pages/users/index"));
const Test = React.lazy(() => import("./components/TestErrorBoundary/index"));
const Nested = React.lazy(() => import("./pages/nested"));

const App = () => {
	return (
		<Routes>
			<Route
				exact
				path='/'
				element={
					<Suspense fallback={<Loader />}>
						<Home />
					</Suspense>
				}
			/>
			<Route
				path='/users'
				element={
					<Suspense fallback={<Loader />}>
						<Users />
					</Suspense>
				}
			/>
			<Route
				path='/test'
				element={
					<Suspense fallback={<Loader />}>
						<Test />
					</Suspense>
				}
			/>
			<Route
				path='/nested'
				element={
					<Suspense fallback={<Loader />}>
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
