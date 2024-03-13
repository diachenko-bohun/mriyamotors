import React from 'react';
import Hero from '../../components/hero/hero';
import About from '../../components/about/about';
import Services from '../../components/services/services';
import Team from '../../components/team/team';
import Arrivals from '../../components/arrivals/arrivals';
import Information from '../../components/information/information';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

function Root() {
	return (
		<div>
			<Header />
			<Hero />
			<About />
			<Services />
			{/* <Team /> */}
			<Information />
			<Arrivals />
			<Footer />
		</div>
	);
}

export default Root;
