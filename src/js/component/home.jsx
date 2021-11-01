import React, { useState } from "react";

const Home = () => {
	const [color, setColor] = useState("");

	return (
		<div className="traffic-light">
			<div className="top"></div>
			<div className="container">
				<div
					onClick={() => setColor("red")}
					className={
						"red" + (color === "red" ? " selected" : "")
					}></div>
				<div
					onClick={() => setColor("yellow")}
					className={
						"yellow" + (color === "yellow" ? " selected" : "")
					}></div>
				<div
					onClick={() => setColor("green")}
					className={
						"green" + (color === "green" ? " selected" : "")
					}></div>
			</div>
		</div>
	);
};

export default Home;
