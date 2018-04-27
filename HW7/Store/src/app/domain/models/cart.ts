import { CartItem } from './cart-item';

export class Cart {

	items: CartItem[];
	totalPrice?: number;

	constructor(
		items: CartItem[],
		totalPrice?: number
	) {
		this.items = items;

		if(totalPrice) {
			this.totalPrice = totalPrice;
		}

	}

}
