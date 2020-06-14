import React from "react";
import "./styles.scss";

const Header = () => {
	return (
		<header data-test="headerComponent">
			<div className="wrap">
				<div className="logo">
					<img
						src="https://via.placeholder.com/150x50/000/fff?text=Logo"
						alt=""
						data-test="logoImg"
					/>
				</div>
			</div>
		</header>
	);
};

export default Header;
