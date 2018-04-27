import { Product } from './product';

export class CartItem {

	product: Product;
	quantity: number;
	totalPrice?: number;

	constructor(
		product: Product,
		quantity: number,
		totalPrice?: number
	) {

		this.product = product;
		this.quantity = quantity;

		if(totalPrice) {
			this.totalPrice = totalPrice;
		}

	}

}
