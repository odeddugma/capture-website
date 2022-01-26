// Import global style
import GlobalStyle from "./components/GlobalStyle";
// Import pages
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MovieDetails from "./pages/MovieDetails";

// Router
import { Route, Routes, useLocation } from "react-router-dom";
// Animation
import { AnimatePresence } from "framer-motion";

function App() {
	const location = useLocation();
	console.log(location);
	return (
		<div className="App">
			<GlobalStyle />
			<Nav />
			<AnimatePresence exitBeforeEnter>
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<AboutUs />} />
					<Route path="/work" element={<OurWork />} />
					<Route path="/work/:id" element={<MovieDetails />} />
					<Route path="/contact" element={<ContactUs />} />
				</Routes>
			</AnimatePresence>

			{/*
      The old way before Reacr Router v6
      <Switch>
        <Route path="/" exact>
				  <AboutUs />
			  </Route>
			  <Route path="/work">
				  <OurWork />
			  </Route>
			  <Route path="/contact">
				  <ContactUs />
			  </Route>
      </Switch>
        */}
		</div>
	);
}

export default App;
