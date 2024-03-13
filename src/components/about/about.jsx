import React, { useEffect } from 'react';
import './about.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div
			id='about'
			className='aboutContainer'
			data-aos='fade'
			data-aos-offset='200'
			data-aos-easing='ease-in-sine'
		>
			<h3 className='aboutTitle'>ÜBER MRIYA MOTORS</h3>
			<p className='aboutSubtitle space'>
				Willkommen bei Mriya Motors - Ihrem Traum von Luxusautos! Wir sind stolz
				auf unseren hohen Servicestandard und bemühen uns, alle Wünsche unserer
				Kunden zu erfüllen. Unser Team überprüft sorgfältig den technischen
				Zustand jedes Fahrzeugs, um Sicherheit und Zuverlässigkeit zu
				gewährleisten.
			</p>
			<p className='aboutSubtitle'>
				Wir tun alles, damit Ihr Autokaufserlebnis bei uns unvergesslich wird.
				Vertrauen Sie Ihren Traum uns an - Mriya Motors.
			</p>
		</div>
	);
}

export default About;
