// Import global style
import GlobalStyle from "./components/GlobalStyle";
// Import pages
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";

// Router
import { Route, Routes } from "react-router-dom";

import Nav from "./components/Nav";

function App() {
	return (
		<div className="App">
			<GlobalStyle />
			<Nav />
			<Routes>
				<Route path="/" element={<AboutUs />} />
				<Route path="/work" element={<OurWork />} />
				<Route path="/contact" element={<ContactUs />} />
			</Routes>

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
