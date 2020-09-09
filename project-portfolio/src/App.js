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
		elTargetGraph.style.animation = "fillAnimation 1s ease-in";
		elTargetGraph.style.animationDelay = delay + "s";
		elTargetGraph.style.borderColor = `rgba(0, 0, 0, 0.15) rgba(0, 0, 0, 0.15) ${sColor} ${sColor}`;
		elTargetGraph.style.transform = `rotate(calc(1deg * (-45 + ${nPercent} * 1.8)))`;
	};

	multiGraphAniJs = (selector, delay) => {
		let elTarget = document.querySelector(selector);
		let elTargetGraph = elTarget.querySelectorAll(".graph");
		let index = 0;

		for (let i of elTargetGraph) {
			let sName = i.getAttribute("data-name");
			let sColor = i.getAttribute("data-color");
			let nPercent = i.getAttribute("data-percent");
			let elTargetInfo = i.querySelector(".info");
			// style 선언
			i.style.animation = "fillGraphAnimation 1s ease-in";
			i.style.animationDelay = delay + index / 2 + "s";
			i.style.border = `50px solid ${sColor}`;
			i.style.transform = `rotate(calc(1deg * (${nPercent} * 1.8)))`;
			elTargetInfo.style.counterReset = `varible ${nPercent}`;
			elTargetInfo.style.transform = `rotate(calc(-1deg * ${nPercent} * 1.8)) translate(-30px, 0px)`;
			elTargetInfo.style.background = `${sColor}`;
			elTargetInfo.innerHTML = `${sName} ${nPercent}%`;
			index++;
		}
	};

	typingAniJS = (selector, delay) => {
		let elTarget = document.querySelector(selector);
		let sTargettxt = elTarget.innerText;
		let index = 0;
		elTarget.innerText = "";

		for (let i of sTargettxt) {
			let newSpan = document.createElement("span");
			newSpan.classList.add("s" + index);
			newSpan.innerText = i;
			elTarget.appendChild(newSpan);
			newSpan.style.animationDelay = delay + index * 0.05 + "s";
			index++;
		}
	};

	section1Js = (scroll) => {
		if (scroll >= this.state.aOffs[0] - this.state.nGap) {
			scroll = scroll - this.state.aOffs[0];
			this.opacityAniJs("#projectSection01 .projectHeading", 0);
			this.opacityAniJs("#projectSection01 .projectDesc", 0.5);
		}
	};

	section2Js = (scroll) => {
		if (scroll >= this.state.aOffs[1] - this.state.nGap) {
			scroll = scroll - this.state.aOffs[1];
			this.opacityAniJs("#projectSection02 .projectHeading", 0);
			this.opacityAniJs(".projectGraphBox", 1);
			this.graphAniJs("#projectSection02 .projectGraph1", 1.5);
			this.graphAniJs("#projectSection02 .projectGraph2", 2);
			this.multiGraphAniJs("#projectSection02 .projectGraph3", 2.5);
		}
	};

	section3Js = (scroll) => {
		if (scroll >= this.state.aOffs[2] - this.state.nGap) {
			scroll = this.state.aOffs[2];
			this.opacityAniJs("#projectSection03 .projectHeading", 0);
			this.opacityAniJs("#projectSection03 .projectDesc", 0.5);
			this.typingAniJS("#projectSection03 .typingAni", 1);
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
			this.section3Js(nScroll);
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
					<div className='projectDesc opacityAni'>
						<p>
							Song YunHye (Female)
							<br />
							1993.04.14(+)
							<br />
							(Mobile) 010-9267-9267
							<br />
							co4484co@gmail.com
						</p>
					</div>
				</section>
				<section id='projectSection02' className='projectSection'>
					<h2 className='projectHeading opacityAni'>Technical Skills</h2>
					<div className='projectGraphBox opacityAni'>
						<div className='projectGraph projectGraph1' data-percent='90' data-color='#f7997c'>
							<span className='title'>HTML5</span>
							<span className='graph'></span>
						</div>
						<div className='projectGraph projectGraph2' data-percent='90' data-color='#faee61'>
							<span className='title'>CSS3</span>
							<span className='graph'></span>
						</div>
						<div className='projectMultitGraph projectGraph3'>
							<span className='title'>Java Script</span>
							<span className='graph' data-name='jQuery' data-percent='80' data-color='#cde2c0'>
								<span className='info'></span>
							</span>
							<span className='graph' data-name='ES6' data-percent='40' data-color='#819fd3'>
								<span className='info'></span>
							</span>
							<span className='graph' data-name='React' data-percent='20' data-color='#8ad0ff'>
								<span className='info'></span>
							</span>
						</div>
					</div>
				</section>
				<section id='projectSection03' className='projectSection'>
					<h2 className='projectHeading opacityAni'>Dev Tools</h2>
					<div className='projectDesc opacityAni'>
						<p className='typingAni'>Github, SVN, Zeplin, Photoshop, FTP, VScode, Redmine, Slack</p>
					</div>
				</section>
			</div>
		);
	}
}

export default App;
