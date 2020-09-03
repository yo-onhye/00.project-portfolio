import React, { Component } from "react";
import "./App.scss";

class App extends Component {
	state = {
		aOffs: [],
		nGap: 150,
	};

	setPosJs = () => {
		const elSection = document.querySelectorAll(".projectSection");
		elSection.forEach((item, index) => {
			this.state.aOffs.push(item.offsetTop);
		});
	};

	backgroundJs = () => {
		const elWrap = document.querySelector(".projectWrap");
		for (let i = 0; i < 100; i++) {
			let elStar = document.createElement("span");
			elStar.classList.add("star");
			elStar.classList.add("star" + i);
			elWrap.appendChild(elStar);
		}
	};

	logoJs = () => {
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

	appearJs = (selector, delay) => {
		const elTitle = document.querySelector(selector);
		elTitle.style.opacity = 1;
		elTitle.style.transitionDelay = delay + "s";
		elTitle.style.transform = 'translateX(0px) translateY(0px) translateZ(0px)';
	};

	section1Js = scroll => {
		if (scroll >= this.state.aOffs[0] - this.state.nGap) {
			scroll = scroll - this.state.aOffs[0];
			this.appearJs(".projectHeading", 0);
			this.appearJs(".projectDesc", 0.5);
		}
	};

	componentDidMount() {
		this.backgroundJs();
		this.logoJs();
		this.setPosJs();
	}

	render() {
		// resize
		window.onresize = () => {
			this.setPosJs();
		};

		// onscroll
		window.onscroll = () => {
			this.section1Js(window.scrollY);
		};

		return (
			<div className='projectWrap'>
				<header className='projcetheader'>
					<h1 className='projectLogo'>
						<span className='words'>FRONT-END</span>
						<span className='words'>DEVELOPER</span>
					</h1>
					<p className='projectTitle'>publisher & front-end developer</p>
				</header>
				<section id='projectSection01' className='projectSection'>
					<h2 className='projectHeading'>ABOUT Me</h2>
					<p className="projectDesc">
						Song YunHye (Female)<br/>
						1993.04.14(+)<br/>
						(Mobile) 010-9267-9267<br/>
						co4484co@gmail.com
					</p>
				</section>
				<section id='projectSection02' className='projectSection'>
					<h2 className='projectHeading'>ABOUT Me</h2>
				</section>
			</div>
		);
	}
}

export default App;
