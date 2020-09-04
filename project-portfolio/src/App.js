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

	opacityAniJs = (selector, delay) => {
		let elTarget = document.querySelector(selector);
		elTarget.style.opacity = 1;
		elTarget.style.transitionDelay = delay + "s";
		elTarget.style.transform = "translateX(0px) translateY(0px) translateZ(0px)";
	};

	revealAniJs = (selector, color) => {
		let elTarget = document.querySelectorAll(selector);
		let getRandomColor = (array) => array[Math.floor(Math.random() * array.length)];

		for (let i of elTarget) {
			let sContent = i.innerHTML;
			let nColor = getRandomColor(color);
			i.innerHTML = `<div class="reveal-cover" style="background-color:${nColor}"></div><span class="reveal-text">${sContent}</span>`;
		}
	};

	section1Js = (scroll) => {
		if (scroll >= this.state.aOffs[0] - this.state.nGap) {
			scroll = scroll - this.state.aOffs[0];
			this.opacityAniJs(".projectHeading", 0);
			this.opacityAniJs(".projectDesc", 0.5);
		}
	};

	section2Js = (scroll) => {
		if (scroll >= this.state.aOffs[1] - this.state.nGap) {
			scroll = scroll - this.state.aOffs[1];
			let elTarget = document.getElementById("projectSection02").querySelectorAll(".revealAni");
			let index = 0;
			for (let i of elTarget) {
				i.classList.add("loaded");
				i.querySelector(".reveal-cover").style.animationDelay = index * 0.1 + "s";
				index++;
			}
		}
	};

	componentDidMount() {
		this.setPosJs();
		this.backgroundJs();
		this.logoJs();
		this.revealAniJs(".revealAni", ["#7f00ff", "#ff00ff", "#0000ff", "#007fff", "#00ffff"]);
		// onscroll
		window.onscroll = () => {
			this.section1Js(window.scrollY);
			this.section2Js(window.scrollY);
		};
	}

	render() {
		// resize
		window.onresize = () => {
			this.setPosJs();
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
					<h2 className='projectHeading opacityAni'>About Me</h2>
					<p className='projectDesc opacityAni'>
						Song YunHye (Female)
						<br />
						1993.04.14(+)
						<br />
						(Mobile) 010-9267-9267
						<br />
						co4484co@gmail.com
					</p>
				</section>
				<section id='projectSection02' className='projectSection'>
					<h2 className='projectHeading'>
						<span className='revealAni'>My Skills</span>
					</h2>
				</section>
			</div>
		);
	}
}

export default App;
