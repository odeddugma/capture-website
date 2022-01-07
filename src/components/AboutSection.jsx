// Import Images
import home1 from "../img/home1.png";
// Styles
import styled from "styled-components";
import { AboutSC, DescriptionSC, ImageSC, HideSC } from "../styles";

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

export default AboutSection;
