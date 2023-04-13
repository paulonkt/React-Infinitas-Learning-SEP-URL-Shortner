import React from 'react';
import { ReactComponent as LogoSVG } from '../../../assets/logo.svg';

import './logo.css';

const Logo = (props: {
	color?: string
}) => {
	return (
		<div className='sep__logo'>
			<LogoSVG fill={props.color ? props.color : '#000'} />
		</div>
	)
}

export default Logo;