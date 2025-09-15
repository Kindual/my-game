import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Suspense } from 'react';
import HomePage from './pages/home/home';
import Loader from './comonents/loader';
import BattlePage from './pages/battlepage/battlePage';

function App() {
	return (
		<>
			<Routes>
				<Route
					path="/"
					element={
						<Suspense fallback={<Loader />}>
							<HomePage />
						</Suspense>
					}
				/>
				<Route
					path="/game"
					element={
						<Suspense fallback={<Loader />}>
							<BattlePage />
						</Suspense>
					}
				/>
			</Routes>
		</>
	);
}

export default App;
