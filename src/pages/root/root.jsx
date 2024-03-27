import React from 'react';
import Hero from '../../components/hero/hero';
import About from '../../components/about/about';
import Services from '../../components/services/services';
import Team from '../../components/team/team';
import Arrivals from '../../components/arrivals/arrivals';
import Information from '../../components/information/information';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import './root.scss';
function Root() {
	return (
		<div>
			<Header />
			<Hero />
			<About />
			<Services />
			{/* <Team /> */}
			<Information />
			{/* <Arrivals /> */}
			<iframe
				src='https://www.autoscout24.at/haendler/embedded-list/mriya-motors-e-u?preview=false'
				scrolling='auto'
				width='100%'
				height='1300'
				frameBorder={0}
				id='arrivals'
			>
				Ihr Browser unterstützt keine iframes
			</iframe>

			<Footer />
		</div>
	);
}

export default Root;
