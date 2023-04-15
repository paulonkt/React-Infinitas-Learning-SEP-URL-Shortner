import './footer.css';

import Logo from '../common/logo/Logo';
import { RiFacebookBoxFill, RiInstagramLine, RiPinterestFill, RiTwitterFill } from 'react-icons/ri';

const Footer = () => {
	const iconSize = 26;
	return (
		<div className='sep__footer'>
			<div className='sep__boxed'>
				<div className='sep__footer-content'>
					<div className='sep__footer-col_logo'>
						<Logo color='#FFF' />
					</div>
					<div className='sep__footer-title'>
						<h3>Features</h3>
						<p><a href='#'>Link Shortening</a></p>
						<p><a href='#'>Branded Links</a></p>
						<p><a href='#'>Analytics</a></p>
					</div>
					<div className='sep__footer-title'>
						<h3>Resources</h3>
						<p><a href='#'>Blog</a></p>
						<p><a href='#'>Link Shortening</a></p>
						<p><a href='#'>Developers</a></p>
						<p><a href='#'>Support</a></p>
					</div>
					<div className='sep__footer-title'>
						<h3>Company</h3>
						<p><a href='#'>About</a></p>
						<p><a href='#'>Our Team</a></p>
						<p><a href='#'>Careers</a></p>
						<p><a href='#'>Contact</a></p>
					</div>
					<div className='sep__footer-social'>
						<a href='#'><RiFacebookBoxFill size={iconSize} className='sep__footer-social_icon' /></a>
						<a href='#'><RiTwitterFill size={iconSize} className='sep__footer-social_icon' /></a>
						<a href='#'><RiPinterestFill size={iconSize} className='sep__footer-social_icon' /></a>
						<a href='#'><RiInstagramLine size={iconSize} className='sep__footer-social_icon' /></a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer;