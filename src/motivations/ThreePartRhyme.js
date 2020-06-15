import React from 'react';

const ThreePartRhyme = (...parts) => {
	return () => {
		return (
			<div>
				<p className="h1">{parts[0]}</p>
				<p className="h1">{parts[1]}</p>
				<p className="h1">{parts[2]}</p>
			</div>
		);
	}
};

export const Rhyme1 = ThreePartRhyme(
	`You're so pretty`,
	`You're so fine`,
	`You've got lots and lots of twine`
);

export const Rhyme2 = ThreePartRhyme(
	`You have 100% got this`,
	`And you've got a hot bot`
);

export const YouGotThis = ThreePartRhyme(
	`You got this`,
	`Guuuuurl`
);

export const Cheerleader1 = ThreePartRhyme(
	`2, 4, 6, 8`,
	`Who do we appreciate?`,
	`Goooooo Lotte!`,
);
