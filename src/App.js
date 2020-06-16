import React, {useEffect, useRef, useState} from 'react';
import {RandomAnimation} from './Random-animation';
import {motivations} from './motivations/ThreePartRhyme';

// exclusive of max
const randomIndex = max => Math.floor((Math.random() * max));

function useInterval(callback, delay) {
	const savedCallback = useRef();

	// Remember the latest callback.
	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	// Set up the interval.
	useEffect(() => {
		function tick() {
			savedCallback.current();
		}

		if (delay !== null) {
			let id = setInterval(tick, delay);
			return () => clearInterval(id);
		}
	}, [delay]);
}

function App() {
	const [exiting, setExiting] = useState(false);
	const [index, setIndex] = useState(randomIndex(motivations.length));

	useInterval(() => {
		const prevIndex = index;
		setExiting(true);

		setTimeout(() => {
			let nextIndex = randomIndex(motivations.length);

			if (motivations.length > 1) {
				while (nextIndex === prevIndex) {
					nextIndex = randomIndex(motivations.length);
				}
			}

			setIndex(nextIndex);
			setExiting(false);
		}, 2000);
	}, 20000);

	return (
		<RandomAnimation shouldExit={exiting}>
			{motivations[index]}
		</RandomAnimation>
	);
}

export default App;
