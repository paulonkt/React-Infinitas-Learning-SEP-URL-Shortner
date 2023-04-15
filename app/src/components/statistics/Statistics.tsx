import brandRecognition from '../../assets/icon-brand-recognition.svg';
import detailedRecords from '../../assets/icon-detailed-records.svg';
import fullyCustomizable from '../../assets/icon-fully-customizable.svg';

import './statistics.css';


const Square =(props: {
	title: string, 
	description: string, 
	icon: string,
	top?: string
}) => (
	<>
		<div 
			className="sep__statistics-details_square" 
			style={
				{ 
					top: props.top ? props.top : 0,
				}
			}
		>
			<div className="sep__statistics-details_square-icon_bg">
				<img src={props.icon} alt="icon" />
			</div>
			<h4>{props.title}</h4>
			<p>{props.description}</p>
		</div>
	</>
)

const Statistics = () => {
	return (
		<div className="sep__statistics">
			<div className="sep__boxed">
				<div className="sep__statistics-details">
					<h3>Advanced Statistics</h3>
					<p>
						Track how your links are performing across the web with <br/>
						our advanced statistics dashboard.
					</p>
				</div>
				<div className="sep__statistics-details_info">
					<div className="sep__statistics-details_line"></div>
					<Square 
						title="Brand Recognition" 
						description="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in vour content."
						icon={brandRecognition}
					/>
					<Square 
						title="Detailed Records" 
						description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
						icon={detailedRecords}
						top="40px"
					/>
					<Square 
						title="Fully Customizable" 
						description="Improve brand awareness anc content discoverability through customizable links, supercharging audience engagement."
						icon={fullyCustomizable}
						top="80px"
					/>
				</div>
			</div>
		</div>
	)
}

export default Statistics;