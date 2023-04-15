import './button.css';

const Button = (props: {
	text: string, 
	height?: number, 
	width?: number, 
	radius?: number,
	action?: string 
}) => {

	return (
		<button 
			type='button' 
			style={
				{ 
					height: props.height ? props.height : 32,
					width: props.width ? props.width : 80,
					borderRadius: props.radius ? props.radius : 30
				}
			}
			className='sep__button-default'
		>{props.text}</button>		
	)
}

export default Button;