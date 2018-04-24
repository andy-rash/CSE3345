/*
 * Angular library
 * */
import {
	Component,
	OnInit
} from '@angular/core';

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

	constructor(
		public cartService: CartService
	) { }

	ngOnInit() { }

}
