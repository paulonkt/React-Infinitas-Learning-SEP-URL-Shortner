import './feature.css';
import Button from '../common/button/Button';

const Feature = () => {
	return (
		<div className='sep__feature'>
			<div className="sep__boxed">
				<div className='sep__feature-search_content'>
					{/* <div className='sep__feature-search'> */}
						<input name='url' placeholder='Shorten a link here...'></input>
						<div className='sep__feature-search_button'>
							<Button text='Shorten it!' width='100%' height='38px' radius='6px' />
						{/* </div> */}
					</div>
				</div>
			</div>
			<div className='sep__feature-background'></div>
		</div>
	)
}

export default Feature;