// Import Images
import home1 from "../img/home1.png";
// Styles
//import styled from "styled-components";
import { AboutSC, DescriptionSC, ImageSC, HideSC } from "../styles";
// Framer Motion
import { motion } from "framer-motion";

/* // Framer Motion Variants
const titleAnim = {
	hidden: { opacity: 0 },
	show: { opacity: 1, transition: { duration: 3 } },
};
const containerAnim = {
	hidden: { x: 100 },
	show: {
		x: 0,
		transition: {
			duration: 3,
			ease: "easeOut",
			staggerChildren: 1,
			when: "afterChildren",
		},
	},
}; */

const AboutSection = () => {
	return (
		<AboutSC>
			<DescriptionSC>
				<motion.div>
					<HideSC>
						<motion.h2>We work to make</motion.h2>
					</HideSC>
					<HideSC>
						<motion.h2>
							your <span>dreams</span> come
						</motion.h2>
					</HideSC>
					<HideSC>
						<motion.h2>true.</motion.h2>
					</HideSC>
				</motion.div>
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
