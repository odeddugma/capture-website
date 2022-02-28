// Import global style
import GlobalStyle from "./components/GlobalStyle";
// Import pages
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MovieDetails from "./pages/MovieDetails";
// Router
import { Route, Routes, useLocation } from "react-router-dom";
// Animations
import { AnimatePresence } from "framer-motion";

import Nav from "./components/Nav";

function App() {
	const location = useLocation();

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
      The old way before React Router v6
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
