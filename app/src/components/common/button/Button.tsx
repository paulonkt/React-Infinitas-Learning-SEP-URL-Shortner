import './button.css';

const Button = (props: {
	text: string, 
	height?: string, 
	width?: string, 
	radius?: string,
	isClicked?: boolean,
	action?: (event: React.MouseEvent<HTMLButtonElement>) => void
}) => {	
	return (
		<button 
			type='button' 
			style={
				{ 
					height: props.height ? props.height : '32px',
					width: props.width ? props.width : '80px',
					borderRadius: props.radius ? props.radius : '30px',
				}
			}
			onClick={props.action}
			className={!props.isClicked ? 'sep__button-default_cyan' : 'sep__button-default_violet'}
		>{props.text}</button>
	)
}

export default Button;