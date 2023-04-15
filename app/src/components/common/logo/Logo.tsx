import { ReactComponent as LogoSVG } from '../../../assets/logo.svg';

import './logo.css';

const Logo = (props: {
	color?: string
}) => {
	return (
		<div className='sep__logo'>
			<LogoSVG fill={props.color ? props.color : '#34313D'} />
		</div>
	)
}

export default Logo;