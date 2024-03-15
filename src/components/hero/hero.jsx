import React, { useEffect, useState } from 'react';
import './hero.scss';
import Background from '../../assets/images/mainBgMin.jpg';
import Logo from '../../assets/svg/heroLogo.svg';
import MainButton from '../buttons/mainButton/mainButton';
import FillButton from '../buttons/fillButton/fillButton';

function Hero() {
	function useScrollDirection() {
		const [scrollDirection, setScrollDirection] = useState(null);
		const [bgTransparent, setbgTransparent] = useState(true);

		useEffect(() => {
			let lastScrollY = window.pageYOffset;

			const updateScrollDirection = () => {
				const scrollY = window.pageYOffset;
				const direction = scrollY > lastScrollY ? 'down' : 'up';
				if (scrollY < 250) {
					setbgTransparent(true);
				} else {
					setbgTransparent(false);
				}
				if (
					direction !== scrollDirection &&
					(scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)
				) {
					setScrollDirection(direction);
				}
				lastScrollY = scrollY > 0 ? scrollY : 0;
			};
			window.addEventListener('scroll', updateScrollDirection); // add event listener
			return () => {
				window.removeEventListener('scroll', updateScrollDirection); // clean up
			};
		}, [scrollDirection]);

		return { scrollDirection, bgTransparent };
	}

	const { scrollDirection, bgTransparent } = useScrollDirection();

	return (
		<div
			className={`heroContainer ${bgTransparent ? 'transparent' : 'blur'}`}
			style={{
				backgroundImage: `url(${Background})`,
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				// backgroundAttachment: 'fixed',
			}}
		>
			<img
				src={Logo}
				className={`heroLogo ${bgTransparent ? 'transparent' : 'blur'}`}
			/>
			<div className={`heroButton ${bgTransparent ? 'transparent' : 'blur'}`}>
				<FillButton
					text={'JETZT ANFRAGEN'}
					href={'#information'}
					accentColor={true}
				/>
			</div>
			<div className='heroScrollDown'>
				<div className='heroScrollDown__line'></div>
			</div>
		</div>
	);
}

export default Hero;
