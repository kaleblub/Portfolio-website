import React from "react";

import Typed from "react-typed";

const Header = () => {
	return (
		<div className="header-wrapper">
			<div class="flip-card-3D-wrapper">
			<div className="header-diamond">
				<div className="main-info">
					<h1>I am Kaleb Humpal</h1>
					<Typed 
						className="typed-text"
						strings={["Python Developer", "React Developer", "Web Developer", "Cyber Security Enthusiast", "Godot Game Engine"]}
						typeSpeed={40}
						backSpeed={60}
						loop
					/>
					<a id="btn-flip-to-back"
					   className="header-diamond-btn" 
					   onclick="">Learn More</a>
				</div>
				<div className="about-me-card-back" >
					<h1>Kaleb Humpal</h1>
					<p></p>
					<p></p>
					<p></p>
					<p></p>
					<a id="btn-flip-to-front"
					   className="header-diamond-btn" 
					   onclick="">Flip Back</a>
				</div>
			</div>
			</div>
		</div>
	)
}

export default Header