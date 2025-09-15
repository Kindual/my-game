import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Suspense } from 'react';
import HomePage from './pages/home/homePage';
import Loader from './comonents/loader';
import BattlePage from './pages/battlepage/battlePage';
import CharacterPage from './pages/character/characterPage';

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
				<Route
					path="/character"
					element={
						<Suspense fallback={<Loader />}>
							<CharacterPage />
						</Suspense>
					}
				/>
			</Routes>
		</>
	);
}

export default App;
