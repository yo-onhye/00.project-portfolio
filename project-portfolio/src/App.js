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

	componentDidMount() {
		this.backgroundJs();
	}

	render() {
		return (
			<div className='projectWrap'>
				<header className='projcetheader'></header>
				<section className='projectSection'></section>
			</div>
		);
	}
}

export default App;
