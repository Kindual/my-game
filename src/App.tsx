// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Suspense } from 'react';
import HomePage from './pages/home/home';
import Loader from './comonents/loader';

function App() {
	// const [count, setCount] = useState(0)

	return (
		<>
			<Routes>
				<Route
					path="/"
					element={
						<Suspense fallback={<Loader/>}>
							<HomePage />
						</Suspense>
					}
				/>
			</Routes>
		</>
	);
}

export default App;
