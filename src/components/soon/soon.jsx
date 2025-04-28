import React from 'react';
import Logo from '../../assets/svg/headerLogo.svg';

import './soon.scss';

function Soon() {
	return (
		<div className='soonContainer' style={{}}>
			<div className='tape-wrapper left'>
				<div className='tape tape-left'>
					<span>
						🚧 SOON 🚧 SOON 🚧 SOON 🚧 SOON 🚧 SOON 🚧 SOON 🚧 SOON 🚧 SOON 🚧
						SOON 🚧 SOON 🚧 SOON 🚧 SOON 🚧 SOON 🚧 SOON 🚧 SOON 🚧 SOON 🚧 SOON
						🚧 SOON 🚧 SOON 🚧 SOON 🚧 SOON 🚧
					</span>
				</div>
			</div>
			<img src={Logo} className='soonLogo' />
			<div className='tape-wrapper right'>
				<div className='tape tape-right'>
					<span>
						🚧 SOON 🚧 SOON 🚧 SOON 🚧 SOON 🚧 SOON 🚧 SOON 🚧 SOON 🚧 SOON 🚧
						SOON 🚧 SOON 🚧 SOON 🚧 SOON 🚧 SOON 🚧 SOON 🚧 SOON 🚧 SOON 🚧 SOON
						🚧 SOON 🚧 SOON 🚧 SOON 🚧 SOON 🚧
					</span>
				</div>
			</div>
		</div>
	);
}

export default Soon;
