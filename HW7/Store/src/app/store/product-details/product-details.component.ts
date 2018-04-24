/*
 * Angular library
 * */
import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

/*
 * RxJS
 * */
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators/map';
import 'rxjs/add/operator/switchMap';

/*
 * Models
 * */
import { Product, ProductReview } from '../../domain';

/*
 * Services
 * */
import {
	CartService,
	ProductRepository,
	ProductReviewRepository
} from '../../domain';

@Component({
	selector: 'app-product-details',
	templateUrl: './product-details.component.html',
	styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

	public product$: Observable<Product>;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		public productRepository: ProductRepository,
		public productReviewRepository: ProductReviewRepository,
		public cartService: CartService
	) { }

	ngOnInit() {

		this.product$ = this.route.paramMap.switchMap((params: ParamMap) => {
			return this.productRepository.getByID(+params.get('id')).pipe(
				map(product => {
					var modifiedProduct = product;
					modifiedProduct.imageName = `assets/img/${product.imageName}`;
					return modifiedProduct;
				})
			);
		});

	}

	public addToCart(product: Product, quantity: number) {
		this.cartService.addToCart(product, +quantity);
	}

	public addedReview(event) {
		this.productReviewRepository.add(event).subscribe(x => {
			console.log("Added Review: ", x);
		});
	}

}
