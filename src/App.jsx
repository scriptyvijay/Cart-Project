import React, { Component } from "react";
import CartList from "./components/CartList";
import Navbar from "./components/Navbar";

import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			products: [
				{ id: 1, title: "SmartPhone", price: 80_000, qty: 1, imgUrl: "https://m.media-amazon.com/images/I/315vs3rLEZL.jpg" },
				{ id: 2, title: "SmartWatch", price: 40_00, qty: 3, imgUrl: "https://m.media-amazon.com/images/I/515BNisImJL._SL1000_.jpg" },
				{ id: 3, title: "TV", price: 10_999, qty: 2, imgUrl: "https://m.media-amazon.com/images/I/71d5fMDvq9L._SL1500_.jpg" },
			],
		};
	}

	handleIncrement = (item) => {
		const { products } = this.state;
		const index = products.findIndex((prod) => prod.id === item.id);
		products[index].qty += 1;
		this.setState({ products });
	};

	handleDecrement = (item) => {
		if (item.qty > 1) {
			const { products } = this.state;
			const index = products.findIndex((prod) => prod.id === item.id);
			products[index].qty--;
			this.setState({ products });
		}
	};

	handleDelete = (item) => {
		const { products } = this.state;
		const filterItem = products.filter((prod) => prod.id !== item);
		this.setState({ products: filterItem });
	};

	getPrice = () => {
		let price = 0;
		let { products } = this.state;
		products.forEach((item) => {
			price += item.qty * item.price;
		});
		return price;
	};

	getQty = () => {
		let qty = 0;
		let { products } = this.state;
		products.forEach((item) => {
			qty += item.qty;
		});
		return qty;
	};
	render() {
		const { products } = this.state;
		return (
			<>
				<Navbar getQty={this.getQty} />
				<CartList products={products} handleIncrement={this.handleIncrement} handleDecrement={this.handleDecrement} handleDelete={this.handleDelete} />
				<h3 className="footer">Total Price: {this.getPrice()}</h3>
			</>
		);
	}
}

export default App;
