import React, { Component } from "react";
import "./App.scss";

class App extends Component {
	state = {};

	backgroundJs = () => {
		const elWrap = document.querySelector(".projectWrap");
		for (let i = 0; i < 100; i++) {
			let elStar = document.createElement("span");
			elStar.classList.add("star");
			elStar.classList.add("star" + i);
			elWrap.appendChild(elStar);
		}
	};

	LogoJs = () => {
		const elLogo = document.querySelector(".projectLogo");
		let sLogotxt = elLogo.innerText;
		let nRandom1 = Math.floor(Math.random() * (sLogotxt.length - 0));
		let nRandom2 = Math.floor(Math.random() * (sLogotxt.length - 0));
		let nRandom3 = Math.floor(Math.random() * (sLogotxt.length - 0));
		let index = 0;
		elLogo.innerText = "";

		for (let i of sLogotxt) {
			let newSpan = document.createElement("span");
			newSpan.classList.add("logo" + index);
			newSpan.innerText = i;
			elLogo.appendChild(newSpan);
			if ((index === nRandom1) | (index === nRandom2) | (index === nRandom3)) {
				document.querySelector(".logo" + index).classList.add("blink");
			}
			index++;
		}
	};

	componentDidMount() {
		this.backgroundJs();
		this.LogoJs();
	}

	render() {
		return (
			<div className='projectWrap'>
				<header className='projcetheader'>
					<h1 className='projectLogo'>
						<span className='words'>FRONT-END</span>
						<span className='words'>DEVELOPER</span>
					</h1>
					<p className="projectTitle">publisher & front-end developer</p>
				</header>
				<section className='projectSection'></section>
			</div>
		);
	}
}

export default App;
