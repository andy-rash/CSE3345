/*
 * Angular library
 * */
import {
	Component,
	OnInit
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';

/*
 * Services
 * */
import { CartService } from '../../domain';

@Component({
	selector: 'app-store-header',
	templateUrl: './store-header.component.html',
	styleUrls: ['./store-header.component.css']
})
export class StoreHeaderComponent implements OnInit {

	public cartItemCount: number;

	constructor(
		private router: Router,
		public cartService: CartService
	) {

		this.cartService.cart.subscribe((cart) => {
			this.cartItemCount = cart.items.length;
		});

	}

	ngOnInit() { }

}
