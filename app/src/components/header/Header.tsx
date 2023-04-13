import Button from '../common/button/Button';
import working from '../../assets/illustration-working.svg';
import './header.css';

const Header = () => {
	return (
		<div className='sep__header' id="home">
			<div className="sep__header-content">
				<div className="sep__header-texts">
					<h1>
						More than just<br/>
						shorter links
					</h1>
					<p>
						Build your brand's recognition and get detailed
						insights on how your links are performing.
					</p>
					<div className='sep__header-button_center'>
						<Button text="Get Started" height={40} width={140} />
					</div>
				</div>
				<div className="sep__header-image">
					<img src={working} />
				</div>
			</div>
		</div>
	)
}

export default Header;