import './information.scss';
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';

import React, { useCallback, useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FillButton from '../buttons/fillButton/fillButton';

const containerStyle = {
	width: '100%',
	height: '400px',
};

const center = {
	lat: 48.292667388916016,
	lng: 16.343233108520508,
};

function Information() {
	useEffect(() => {
		AOS.init();
	}, []);

	const { isLoaded } = useJsApiLoader({
		id: 'mriyamotors',
		googleMapsApiKey: 'AIzaSyBzcqGkJ3PWPpUceXZvEoUPgnuXWSMB-BQ',
	});

	const [map, setMap] = useState(null);

	const onLoad = useCallback(function callback(map) {
		setMap(map);
	}, []);

	const onUnmount = useCallback(function callback(map) {
		setMap(null);
	}, []);

	return (
		<div className='informationContainer' id='information'>
			<h3 className='informationTitle'>Händler INFORMATION</h3>
			<div className='informationInner'>
				<div
					className='informationCol'
					data-aos='fade-right'
					// data-aos-offset='100'
					data-aos-easing='ease-in-sine'
				>
					<div className='informationHead'>
						<h3 className='informationHead__title'>MRIYA MOTORS</h3>
						<div className='informationHead__inner'>
							<p className='informationHead__text'>Donaustraße 98</p>
							<p className='informationHead__text'>3400 Klosterneuburg</p>
							<p className='informationHead__text'>Österreich</p>
						</div>
					</div>
					<div className='informationBody'>
						<div className='informationBody__inner'>
							<p className='informationBody__text'>Email:</p>
							<a
								className='informationBody__link'
								href='mriyamotors@gmail.com'
								target='_blank'
							>
								mriyamotors@gmail.com
							</a>
						</div>
						<div className='informationBody__inner'>
							<p className='informationBody__text'>Instagram:</p>
							<a
								className='informationBody__link'
								href='https://www.instagram.com/mriyamotors?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
								target='_blank'
							>
								@mriyamotors
							</a>
						</div>
						<div className='informationBody__inner'>
							<p className='informationBody__text'>Telefonnummer:</p>
							<a className='informationBody__link' href='tel:+43 665 65936411'>
								+43 665 65936411
							</a>
						</div>
						<div className='informationBody__inner'>
							<p className='informationBody__text'>Whatsapp / Telegram:</p>
							<a className='informationBody__link' href='tel:+43 665 65936411'>
								+43 665 65936411
							</a>
						</div>
						<div className='informationBtnWrapper'>
							<FillButton
								text={'JETZT ANFRAGEN'}
								blackColor={true}
								href={'tel:+43 665 65936411'}
							/>
						</div>
					</div>
				</div>
				<div
					className='informationCol'
					data-aos='fade-left'
					// data-aos-offset='100'
					data-aos-easing='ease-in-sine'
				>
					{isLoaded && (
						<GoogleMap
							mapContainerStyle={containerStyle}
							center={center}
							zoom={18}
							onLoad={onLoad}
							onUnmount={onUnmount}
							defaultAverageCenter={true}
						>
							{/* Child components, such as markers, info windows, etc. */}
							<MarkerF position={center} />
						</GoogleMap>
					)}
				</div>
			</div>
		</div>
	);
}

export default Information;
