import React, {useEffect, useRef, useState} from 'react';
import {RandomAnimation} from './Random-animation';
import {Cheerleader1, Rhyme1, Rhyme2, YouGotThis} from './motivations/ThreePartRhyme';

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
	}, 20000);

	return (
		<RandomAnimation shouldExit={exiting}>
			{motiviations[index]}
		</RandomAnimation>
	);
}

export default App;
