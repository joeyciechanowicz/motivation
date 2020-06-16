import React from 'react';

const Paragraphs = (...parts) => {
	return (
		<>
			{parts.map((part, i) => <p className="h1" key={i}>{part}</p>)}
		</>
	);
};

const List = (header, ...items) => {
	return (
		<>
			<p className="h1">{header}</p>
			<ul>
				{items.map((part, i) => <li className="h2" key={i}>{part}</li>)}
			</ul>
		</>
	);
};

export const motivations = [
	Paragraphs(
		`You're so pretty`,
		`You're so fine`,
		`You've got lots and lots of twine`
	),
	Paragraphs(
		`You have 100% got this`,
		`And you've got a hot bot`
	),
	Paragraphs(
		`You got this`,
		`Guuuuurl`
	),
	Paragraphs(
		`2, 4, 6, 8`,
		`Who do we appreciate?`,
		`Goooooo Lotte!`,
	),
	List(
		'Things that are great about Lotte',
		'Really good at making little biscuits',
		'Always knows how to cheer you up',
		'Has the secret to the perfect bath blend',
		'Remembers how to make rice'
	),
	List(
		'Things Lotte likes',
		'Teeny tiny biscuits and cakes',
		'Back scratches',
		'Correctly ordered cushions',
		'Long relaxing breakfasts'
	),
	Paragraphs(
		'Give me an L',
		'Give me an O',
		'Give me a double T',
		'Give me an E',
		'What does that spell?',
		'LOTTE!'
	),
	Paragraphs(
		`You've got razzmatazz, baby!`
	),
	Paragraphs(
		'L is for loving',
		'O is for original',
		'T is for terrific',
		'T is for tantalizing',
		'E is for "ey up jim"'
	),
	Paragraphs(
		'One two three four',
		'Penguins at the front door',
		'Five six seven eight',
		`You don't need to procrastinate`
	),
	List(
		'Recipe for a perfect dissertation',
		'1 cup of original thought',
		'1/2 cup of references',
		'2 cups of words',
		'1 tablespoon of sassy feminist dialect'
	)
];
