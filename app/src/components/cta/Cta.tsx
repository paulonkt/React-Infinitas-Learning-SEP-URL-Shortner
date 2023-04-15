import './cta.css';
import Button from '../common/button/Button';

const Cta = () => {
	return (
		<div className='sep__cta'>
			<div className='sep__cta-call'>
				<h3>Boost your links today</h3>
			</div>
			<div className='sep__cta-button_center'>
				<Button text='Get Started' height='40px' width='140px' />
			</div>
		</div>
	)
}

export default Cta;