// Import Images
import home2 from "../img/home2.png";
// Import Icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
// Styles
import styled from "styled-components";
import { AboutSC, DescriptionSC, ImageSC } from "../styles";

const ServicesSection = () => {
	return (
		<ServicesSC>
			<DescriptionSC>
				<h2>
					Hige <span>quality</span> services
				</h2>
				<CardsSC>
					<CardSC>
						<div className="icon">
							<img src={clock} alt="clock" />
							<h3>Efficient</h3>
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</CardSC>
					<CardSC>
						<div className="icon">
							<img src={teamwork} alt="teamwork" />
							<h3>Teamwork</h3>
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</CardSC>
					<CardSC>
						<div className="icon">
							<img src={diaphragm} alt="diaphragm" />
							<h3>Diaphragm</h3>
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</CardSC>
					<CardSC>
						<div className="icon">
							<img src={money} alt="money" />
							<h3>Affordable</h3>
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</CardSC>
				</CardsSC>
			</DescriptionSC>
			<ImageSC>
				<img src={home2} alt="camera" />
			</ImageSC>
		</ServicesSC>
	);
};

const ServicesSC = styled(AboutSC)`
	h2 {
		padding-bottom: 5rem;
	}
	p {
		width: 70%;
		padding: 2rem 0rem 4rem 0rem;
	}
`;

const CardsSC = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const CardSC = styled.div`
	//width: 50%;
	flex-basis: 14rem;
	.icon {
		display: flex;
		align-items: center;
	}
	h3 {
		margin-left: 1rem;
		background: white;
		color: black;
		padding: 1rem;
	}
`;

export default ServicesSection;
