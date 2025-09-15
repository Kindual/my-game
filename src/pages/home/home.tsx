import { useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../comonents/loader';

function HomePage() {
	const [isLoading, setIsLoading] = useState(false);

	const handlePlayClick = () => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	};

	return (
		<div className="home-page">
			{isLoading ? (
				<Loader />
			) : (
				<>
					<h2>Ласкаво просимо до гри "Три в ряд"!</h2>
					<p>Складай три однакові елементи в ряд, щоб заробити очки!</p>
					<Link to="/game">
						<button onClick={handlePlayClick}>Грати</button>
					</Link>
				</>
			)}
		</div>
	);
}

export default HomePage;
