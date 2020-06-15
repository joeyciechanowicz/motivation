import React, {useEffect, useState} from 'react';


const entrances = [
	'animate__slideInDown',
	'animate__slideInLeft',
	'animate__slideInRight',
	'animate__slideInUp',
	'animate__rollIn',
	'animate__rotateIn',
	'animate__rotateInDownLeft',
	'animate__rotateInDownRight',
	'animate__rotateInUpLeft',
	'animate__rotateInUpRight',
	'animate__lightSpeedInRight',
	'animate__lightSpeedInLeft',
	'animate__flipInX',
	'animate__flipInY',
	'animate__fadeInDown',
	'animate__fadeInLeft',
	'animate__fadeInRight',
	'animate__fadeInUp',
	'animate__fadeInTopLeft',
	'animate__fadeInTopRight',
	'animate__bounceInDown',
	'animate__bounceInLeft',
	'animate__bounceInRight',
	'animate__bounceInUp',
	'animate__backInDown',
	'animate__backInLeft',
	'animate__backInRight',
	'animate__backInUp'
];

const exits = [
	'animate__slideOutDown',
	'animate__slideOutLeft',
	'animate__slideOutRight',
	'animate__slideOutUp',
	'animate__rollOut',
	'animate__rotateOut',
	'animate__rotateOutDownLeft',
	'animate__rotateOutDownRight',
	'animate__rotateOutUpLeft',
	'animate__rotateOutUpRight',
	'animate__lightSpeedOutRight',
	'animate__lightSpeedOutLeft',
	'animate__flipOutX',
	'animate__flipOutY',
	'animate__fadeOutDown',
	'animate__fadeOutLeft',
	'animate__fadeOutRight',
	'animate__fadeOutUp',
	'animate__fadeOutTopLeft',
	'animate__fadeOutTopRight',
	'animate__bounceOutDown',
	'animate__bounceOutLeft',
	'animate__bounceOutRight',
	'animate__bounceOutUp',
	'animate__backOutDown',
	'animate__backOutLeft',
	'animate__backOutRight',
	'animate__backOutUp'
];

const random = (array) => array[Math.floor((Math.random() * array.length))];

const randomEntrance = () => random(entrances);
const randomExit = () => random(exits);

export const RandomAnimation = ({children, shouldExit}) => {
	const [entranceAnimation, setEntrance] = useState(randomEntrance());
	const [exitAnimation, setExit] = useState(randomExit());

	useEffect(() => {
		if (shouldExit) {
			setExit(randomExit());
		} else {
			setEntrance(randomEntrance());
		}
	}, [shouldExit]);

	const animation = entranceAnimation + (shouldExit ? ` ${exitAnimation}` : '');

	return (
		<div className={`animate__animated ${animation}`}>
			{children}
		</div>
	);
};
