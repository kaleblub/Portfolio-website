import "bootstrap/dist/css/bootstrap.min.css";
/*************** PACKAGE IMPORTS ***************/
import Particles from "react-particles-js";

/***************** CUSTOM MADE IMPORTS ***********************/
import particlesConfig from "./config/particlesConfig";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import './App.css';


// Experimental components
import CountryParticles from "./components/Country";
import Country2 from "./components/Country2";

function App() {
  return (
  	<>
  		<Particles className="particles-canvas" params={particlesConfig} />
	  	<Navbar />
	  	<Header />
	  	<div className="rest">
		  	<h1>About Me !UNDER DEVELOPMENT!</h1>
		  	<h1>Projects !UNDER DEVELOPMENT!</h1>
		  	<h1>My Journey(Blog) !UNDER DEVELOPMENT!</h1>
		  	<h1>Reach Out !UNDER DEVELOPMENT!</h1>
			<div className="diamond-narrow"></div>
			<Country2 />
		</div>
  	</>
  );
}

export default App;
