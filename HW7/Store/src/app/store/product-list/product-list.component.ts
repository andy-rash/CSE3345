/*
 * Angular library
 * */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

	public imgSrcRoot: string = 'assets/img/';
	public products: Product[];

	constructor(
		private activatedRoute: ActivatedRoute,
		private router: Router,
		public productRepository: ProductRepository,
		public cart: CartService
	) { }

	ngOnInit() {

		// parse JSON received from server into Products and
		// ProductReviews, sort them by their product ID
		//
		// mapping required to inject path to image in
		// assets folder (see line 43)
		this.productRepository.get().subscribe(
			products => {
				this.products = products.map(product => {
					return new Product(
						product.id,
						product.name,
						product.description,
						`${this.imgSrcRoot}${product.imageName}`,
						product.price,
						product.reviews.map(review => {
							return new ProductReview(
								review.productId,
								review.userName,
								review.rating,
								new Date(review.date),
								review.comment
							)
						})
					);
				}).sort( (a,b): number => {
					return (a.id > b.id) ? 1 : (b.id > a.id) ? -1 : 0;
				});
			}
		);

	}

	public addToCart(productId: number) {
		this.cart.addToCart(this.products.find(x => x.id == productId), 1);
	}

	public gotoProductDetails(productId: number) {
		this.router.navigateByUrl('/products/'+String(productId));
	}

	public consoleListCart() {
		this.cart.listCart();
	}

}
