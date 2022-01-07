// Import Images
import home1 from "../img/home1.png";
// Style
import styled from "styled-components";

const AboutSection = () => {
	return (
		<AboutSC>
			<DescriptionSC>
				<div className="title">
					<HideSC>
						<h2>We work to make</h2>
					</HideSC>
					<HideSC>
						<h2>
							your <span>dreams</span> come
						</h2>
					</HideSC>
					<HideSC>
						<h2>true.</h2>
					</HideSC>
				</div>
				<p>
					Contact us for any photograph or videography ideas that you have. We
					have professionals with amazing skills to help you achieve it.
				</p>
				<button>Contact Us</button>
			</DescriptionSC>
			<ImageSC>
				<img src={home1} alt="guy with a camera" />
			</ImageSC>
		</AboutSC>
	);
};

// Styled Components
const AboutSC = styled.div`
	min-height: 90vh;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 5rem 10rem;
	color: white;
`;
const DescriptionSC = styled.div`
	flex: 1;
	padding-right: 5rem;
	h2 {
		font-weight: lighter;
	}
`;
const ImageSC = styled.div`
	flex: 1;
	overflow: hidden;
	img {
		width: 100%;
		height: 80vh;
		object-fit: cover;
	}
`;
const HideSC = styled.div`
	overflow: hidden;
`;

export default AboutSection;
