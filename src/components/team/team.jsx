import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './team.scss';

import IvanPhoto from '../../assets/images/IvanTeamPhoto.jpeg';
import ArtemPhoto from '../../assets/images/ArtemTeamPhoto.jpeg';

function Team() {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div
			id='team'
			className='teamContainer'
			data-aos='fade-up'
			data-aos-offset='300'
			data-aos-easing='ease-in-sine'
		>
			<h3 className='teamTitle'>MEET THE TEAM</h3>
			<p className='teamSubtitle'>
				Mriya Motors Vienna is renowned for the highest level of professionalism
				and advice. Our sales and service staff provide an experience in line
				with a luxury car marques, known for creating the ultimate in motoring.
			</p>
			<div className='teamWrapper'>
				<div className='teamItem'>
					<div className='teamItem__inner'>
						<img src={IvanPhoto} className='teamItem__image' />
					</div>
					<p className='teamItem__title'>Ivan Lukyanov</p>
					<p className='teamItem__subtitle'>Co-Founder</p>
				</div>
				<div className='teamItem'>
					<div className='teamItem__inner'>
						<img src={ArtemPhoto} className='teamItem__image' />
					</div>
					<p className='teamItem__title'>Artem Diachenko-Bogun</p>
					<p className='teamItem__subtitle'>Co-Founder</p>
				</div>
			</div>
		</div>
	);
}

export default Team;
