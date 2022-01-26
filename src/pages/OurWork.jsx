import styled from "styled-components";
import { Link } from "react-router-dom";
// Import animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

// Import Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

const OurWork = () => {
	return (
		<WorkSC
			variants={pageAnimation}
			initial="hidden"
			animate="show"
			exit="exit"
			style={{ background: "#fff" }}
		>
			<MovieSC>
				<h2>The Athelete</h2>
				<div className="line"></div>
				<Link to="/work/the-athlete">
					<img src={athlete} alt="athlete" />
				</Link>
			</MovieSC>
			<MovieSC>
				<h2>The Racer</h2>
				<div className="line"></div>
				<Link to="/work/the-racer">
					<img src={theracer} alt="the racer" />
				</Link>
			</MovieSC>
			<MovieSC>
				<h2>Good Times</h2>
				<div className="line"></div>
				<Link to="/work/good-times">
					<img src={goodtimes} alt="good times" />
				</Link>
			</MovieSC>
		</WorkSC>
	);
};

const WorkSC = styled(motion.div)`
	min-height: 100vh;
	overflow: hidden;
	padding: 5rem 10rem;
	h2 {
		padding: 1rem 0rem;
		color: white;
	}
`;
const MovieSC = styled.div`
	padding-bottom: 10rem;
	.line {
		height: 0.5rem;
		background: #cccccc;
		margin-bottom: 3rem;
	}
	img {
		width: 100%;
		height: 70vh;
		//object-fit: cover;
	}
`;

export default OurWork;
