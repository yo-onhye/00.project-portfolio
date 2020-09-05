import React, { Component } from "react";
import "./App.scss";

class App extends Component {
	state = {
		aOffs: [],
		nGap: 200,
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

	graphAniJs = (selector, delay) => {
		let elTarget = document.querySelector(selector);
		let sColor = elTarget.getAttribute("data-color");
		let nPercent = elTarget.getAttribute("data-percent");
		let elTargetGraph = elTarget.querySelector(".graph");

		elTargetGraph.innerHTML = `<span class="blind">${nPercent}%</span>`;

		// style 선언
		elTarget.style.textShadow = `0 0 4px ${sColor}, 0 0 10px ${sColor}`;
		elTargetGraph.style.animation = 'fillAnimation 1s ease-in';
		elTargetGraph.style.animationDelay = delay + "s";
		elTargetGraph.style.borderColor = `rgba(0, 0, 0, 0.15) rgba(0, 0, 0, 0.15) ${sColor} ${sColor}`;
		elTargetGraph.style.transform = `rotate(calc(1deg * (-45 + ${nPercent} * 1.8)))`;
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
			this.opacityAniJs(".projectHeading", 0);
			this.graphAniJs(".projectGraph1", 0.5);
			this.graphAniJs(".projectGraph2", 1);
			this.graphAniJs(".projectGraph3", 1.5);
		}
	};

	componentDidMount() {
		this.setPosJs();
		this.backgroundJs();
		this.logoJs();
		this.revealAniJs(".revealAni", ["#7f00ff", "#ff00ff", "#0000ff", "#007fff", "#00ffff"]);
		// onscroll
		window.onscroll = () => {
			let nScroll = window.scrollY;
			this.section1Js(nScroll);
			this.section2Js(nScroll);
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
					<h2 className='projectHeading'>Technical Skills</h2>
					<div className='projectGraphBox'>
						<div className='projectGraph projectGraph1' data-percent='80' data-color='#ff3d00'>
							<span className='title'>HTML5</span>
							<span className='graph'></span>
						</div>
						<div className='projectGraph projectGraph2' data-percent='80' data-color='#039be5'>
							<span className='title'>CSS3</span>
							<span className='graph'></span>
						</div>
						<div className='projectGraph projectGraph3' data-percent='80' data-color='#fede3e'>
							<span className='title'>Java Script</span>
							<span className='graph'></span>
						</div>
					</div>
				</section>
				<section id='projectSection03' className='projectSection'>
					<h2 className='projectHeading'>Dev Tools</h2>
				</section>
			</div>
		);
	}
}

export default App;
