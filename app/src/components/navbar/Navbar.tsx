import React, { useState } from 'react';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';
import Button from '../button/Button';

const Menu = () => (
	<>
		<p><a href="#">Features</a></p>
		<p><a href="#">Pricing</a></p>
		<p><a href="#">Resources</a></p>
	</>
)

const Navbar = () => {
	const [toogleMenu, setToogleMenu] = useState(false);

	return (
		<div className='sep__navbar'>
			<div className='sep__navbar-links'>
				<div className='sep__navbar-links_logo'>
				<img src={logo} alt='logo' />
				</div>
				<div className="sep__navbar-links_container">
					<Menu />
				</div>
			</div>
			<div className='sep__navbar-sign'>
				<p><a href="">Login</a></p>
				<Button text='Sign Up' action='' />
			</div>
			<div className="sep__navbar-menu">
				{toogleMenu
					? <RiCloseLine color="var(--color-neutral-gray)" size={27} onClick={() => setToogleMenu(false)} />
					: <RiMenu3Line color="var(--color-neutral-gray)" size={27} onClick={() => setToogleMenu(true)}/>
				}
				{toogleMenu && (
					<div className='sep__navbar-menu_container scale-up-center'>
						<div className="sep__navbar-menu_container-links">
							<Menu />
							<div className='sep__navbar-menu_container-links-sign'>
								<p><a href="">Login</a></p>
								<Button text='Sign Up' action='' />
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default Navbar;