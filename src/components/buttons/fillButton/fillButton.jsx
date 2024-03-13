import React from 'react';
import './fillButton.scss';

function FillButton({
	text,
	href = '/',
	accentColor = false,
	blackColor = false,
}) {
	return (
		<a
			href={href}
			className={`fillButton ${accentColor ? 'accentColor' : ''} ${
				blackColor ? 'blackColor' : ''
			}`}
		>
			{text}
		</a>
	);
}

export default FillButton;
