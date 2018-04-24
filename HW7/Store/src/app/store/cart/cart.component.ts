/*
 * Angular library
 * */
import { Component, OnInit } from '@angular/core';

/*
 * RxJS
 * */
import { Observable } from 'rxjs';

/*
 * Models
 * */
 import { Cart, Product } from '../../domain';

/*
 * Services
 * */
import { CartService } from '../../domain';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

	private cart: Cart;

	constructor(
		public cartService: CartService
	) { }

	ngOnInit() {

		this.cartService.cart.subscribe((cart) => {
			this.cart = cart;
		});

	}

	listCart() {
		this.cartService.cart.subscribe((cart) => {
			console.log(typeof(cart), this.cart);
		});
	}

}
