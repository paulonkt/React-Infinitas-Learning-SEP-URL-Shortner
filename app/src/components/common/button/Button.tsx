import './button.css';

const Button = (props: {
	text: string, 
	height?: string, 
	width?: string, 
	radius?: string,
	action?: string

}) => {

	return (
		<button 
			type='button' 
			style={
				{ 
					height: props.height ? props.height : '32px',
					width: props.width ? props.width : '80px',
					borderRadius: props.radius ? props.radius : '30px'
				}
			}
			className='sep__button-default'
		>{props.text}</button>		
	)
}

export default Button;