import React, { useRef, useState } from 'react';
import Hero from '../../components/hero/hero';
import About from '../../components/about/about';
import Services from '../../components/services/services';
import Team from '../../components/team/team';
import Arrivals from '../../components/arrivals/arrivals';
import Information from '../../components/information/information';
import Header from '../../components/header/header';
import Soon from '../../components/soon/soon';
import Footer from '../../components/footer/footer';
import IframeResizer from 'iframe-resizer-react';

import './root.scss';

import './root.scss';
function Root() {
	const ref = React.useRef();
	const [height, setHeight] = React.useState('0px');
	const onLoad = () => {
		// console.log(
		// 	'ref.current.contentWindow.document.body.scrollHeight',
		// 	ref.current.contentWindow.document.body.scrollHeight
		// );
		// setHeight(ref.current.contentWindow.document.body.scrollHeight + 'px');
	};

	return (
		<div>
			<Soon />
			{/* <Header /> */}
			{/* <Hero /> */}
			{/* <About /> */}
			{/* <Services /> */}
			{/* <Team /> */}
			{/* <Information /> */}
			{/* <Arrivals /> */}
			{/* <div id='arrivals' class='responsive-iframe-container'>
				<iframe
					frameBorder={0}
					class='responsive-iframe'
					src='https://www.autoscout24.at/haendler/embedded-list/mriya-motors-e-u?preview=false'
				></iframe>
			</div> */}

			{/* <Footer /> */}
		</div>
	);
}

export default Root;
