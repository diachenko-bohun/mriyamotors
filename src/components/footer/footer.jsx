import React from 'react';
import Logo from '../../assets/svg/footerLogo.svg';
import fbIcon from '../../assets/svg/facebook.svg';
import instagramIcon from '../../assets/svg/instagram.svg';
import whatsappIcon from '../../assets/svg/whatsapp.svg';

import './footer.scss';

function Footer() {
	return (
		<div className='footerContainer'>
			<div className='footerBody'>
				<div className='footerNav'>
					<div className='footerNav__col'>
						<a href='#about'>Über uns</a>
						<a href='#services'>Leistungen</a>
					</div>
					<div className='footerNav__col'>
						<a href='#information'>Information</a>
						<a href='#arrivals'>Aktuelle Fahrzeuge</a>
					</div>
					{/* <div className='footerNav__col'>
						<a href='#'>Information</a>
					</div> */}
				</div>
				<div className='footerNetworks'>
					<div className='footerNetworks__inner'>
						<a
							href='https://www.facebook.com/profile.php?id=61557406077299'
							target='_blank'
						>
							<img src={fbIcon} className='footerNetworks__img sm' />
						</a>
						<a
							href='https://www.instagram.com/mriyamotors?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
							target='_blank'
						>
							<img src={instagramIcon} className='footerNetworks__img sm' />
						</a>
						<a href='tel:+43 665 65936411'>
							<img src={whatsappIcon} className='footerNetworks__img' />
						</a>
					</div>
					<div className='footerNetworks__logo'>
						<a href='#'>
							<img src={Logo} className='footerLogo' />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
