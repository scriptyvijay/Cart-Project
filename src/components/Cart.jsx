import React from "react";
import "./cart.css";

const Cart = (props) => {
	const { title, price, qty, imgUrl } = props.product;
	const { handleIncrement, handleDecrement, handleDelete } = props;
	return (
		<>
			<div className="cart">
				<section className="left">
					<img src={imgUrl} alt="" />
				</section>
				<section className="right">
					<h3>Title: {title}</h3>
					<p>Price: {price}</p>
					<p>Qty: {qty}</p>
					<section className="func-btn">
						<img
							src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
							alt="add"
							onClick={() => {
								handleIncrement(props.product);
							}}
						/>
						<img
							src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
							alt="minus"
							onClick={() => {
								handleDecrement(props.product);
							}}
						/>
						<img
							src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
							alt="delete"
							onClick={() => {
								handleDelete(props.product.id);
							}}
						/>
					</section>
				</section>
			</div>
		</>
	);
};

export default Cart;
