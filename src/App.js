import React, {useEffect, useRef, useState} from 'react';
import {RandomAnimation} from './Random-animation';
import {YouGotThis} from './motivations/You-got-this';
import {Rhyme1, Rhyme2, Cheerleader1} from './motivations/ThreePartRhyme';

// exclusive of max
const randomIndex = max => Math.floor((Math.random() * max));

const motiviations = [
	<Rhyme1/>,
	<Rhyme2/>,
	<Cheerleader1/>,
	<YouGotThis/>,
];

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
	const [index, setIndex] = useState(randomIndex(motiviations.length));

	useInterval(() => {
		const prevIndex = index;
		setExiting(true);

		setTimeout(() => {
			let nextIndex = randomIndex(motiviations.length);

			while (nextIndex === prevIndex) {
				nextIndex = randomIndex(motiviations.length);
			}

			setIndex(nextIndex);
			setExiting(false);
		}, 2000);
	}, 5000);

	return (
		<RandomAnimation shouldExit={exiting}>
			{motiviations[index]}
		</RandomAnimation>
	);
}

export default App;
