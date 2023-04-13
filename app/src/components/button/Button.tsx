import React from 'react';
import './button.css';

const Button = (props: { text: string, action: string }) => {

	return (
		<button type='button' className='sep__button-default'>{props.text}</button>		
	)
}

export default Button;