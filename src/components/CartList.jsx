import React from "react";
import Cart from "./Cart";

function CartList(props) {
	const { products, handleIncrement, handleDecrement, handleDelete } = props;
	return products.map((item, id) => {
		return <Cart key={id} product={item} handleIncrement={handleIncrement} handleDecrement={handleDecrement} handleDelete={handleDelete} />;
	});
}

export default CartList;
