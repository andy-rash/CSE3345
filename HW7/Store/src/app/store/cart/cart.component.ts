/*
 * Angular library
 * */
import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

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
		private router: Router,
		public cartService: CartService
	) { }

	ngOnInit() {

		this.cartService.cart.subscribe((cart) => {
			this.cart = cart;
		});

	}

	updateQuantity(productId: number, quantity: number) {
		console.log(productId, quantity);
		this.cartService.updateQuantity(productId, quantity);
	}

}
