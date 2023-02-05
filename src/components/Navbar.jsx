import React from "react";
import "./navbar.css";

const Navbar = (props) => {
	return (
		<>
			<div className="navbar">
				<h1>LowCart</h1>
				<section>
					<img src="https://cdn-icons-png.flaticon.com/512/833/833314.png" alt="cart" className="cart-img" />
					<span>{props.getQty()}</span>
				</section>
			</div>
		</>
	);
};

export default Navbar;
