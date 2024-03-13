import React, { useEffect, useState } from 'react';

import Logo from '../../assets/svg/headerLogo.svg';
import PhoneIcon from '../../assets/svg/whatsapp.svg';

import './header.scss';

function Header() {
	const [headerTransparent, setHeaderTransparent] = useState(true);
	const [isOpenMenu, setIsOpenMenu] = useState(false);

	useEffect(() => {
		document.body.classList.toggle('modal-open', isOpenMenu);
	}, [isOpenMenu]);

	function useScrollDirection() {
		const [scrollDirection, setScrollDirection] = useState(null);

		useEffect(() => {
			let lastScrollY = window.pageYOffset;

			const updateScrollDirection = () => {
				const scrollY = window.pageYOffset;
				const direction = scrollY > lastScrollY ? 'down' : 'up';
				if (scrollY < 100) {
					setHeaderTransparent(true);
				} else {
					setHeaderTransparent(false);
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

		return scrollDirection;
	}

	const scrollDirection = useScrollDirection();

	const onClickMenu = () => {
		setIsOpenMenu(!isOpenMenu);

		if (isOpenMenu) {
			document.getElementById('menu__toggle').checked = false;
		}
	};

	return (
		<div
			className={`header ${scrollDirection === 'down' ? 'hide' : 'show'} ${
				headerTransparent ? 'transparent' : 'blur'
			}`}
		>
			<div className='headerInner'>
				<div className='headerRow'>
					<div className='hamburger-menu'>
						<input id='menu__toggle' type='checkbox' />
						<label
							onClick={() => setIsOpenMenu(!isOpenMenu)}
							className='menu__btn'
							htmlFor='menu__toggle'
						>
							<span></span>
							<p>MENU</p>
						</label>

						<div className='menu__box'>
							<li>
								<a className='menu__item' href='#about' onClick={onClickMenu}>
									About
								</a>
							</li>
							<li>
								<a
									className='menu__item'
									href='#services'
									onClick={onClickMenu}
								>
									Services
								</a>
							</li>
							{/* <li>
								<a className='menu__item' href='#team' onClick={onClickMenu}>
									Team
								</a>
							</li> */}
							<li>
								<a
									className='menu__item'
									href='#information'
									onClick={onClickMenu}
								>
									Information
								</a>
							</li>
							<li>
								<a
									className='menu__item'
									href='#arrivals'
									onClick={onClickMenu}
								>
									Arrivals
								</a>
							</li>
						</div>
						{isOpenMenu && <div className='menuLayout' />}
					</div>
				</div>

				<div className='headerRow center'>
					<a href='/'>
						<img src={Logo} className='headerLogo' />
					</a>
				</div>
				<div className='headerRow end'>
					<a className='headerPhone' href='tel:+43 665 65936411'>
						<p>KONTAKT</p>
						<img src={PhoneIcon} className='headerPhone__icon' />
					</a>
				</div>
			</div>
		</div>
	);
}

export default Header;
