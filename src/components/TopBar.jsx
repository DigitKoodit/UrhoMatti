import React, { Component } from 'react';
import MenuButton from './MenuButton';
import Menu from './Menu';
import Search from './Search';

class TopBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			menuVisible: false
		};
		this.toggleMenu = this.toggleMenu.bind(this);
		this.toggleMenuButton = this.toggleMenuButton.bind(this);

	}

	toggleMenu(e) {
		if (!e.target.id || e.target.id === "flyoutMenu") {
			this.setState({ menuVisible: !this.state.menuVisible });
		}
	}

	toggleMenuButton() {
		this.setState({ menuVisible: !this.state.menuVisible });
	}

	render() {
		return (
			<div id="top-bar" className="top-bar">
				<a href="/" className="top-bar-heading">
					<span style={{ fontSize: "25px", color: "#FED700", fontFamily: "Montserrat", fontWeight: "bold" }}>urho matti 4.0</span>
				</a>
				<MenuButton
					onClick={this.toggleMenuButton}
					menuVisible={this.state.menuVisible}
				/>
				<Menu
					onClick={this.toggleMenu}
					menuVisible={this.state.menuVisible}
				/>
				<Search />
			</div>
		);
	}
}

export default TopBar;
