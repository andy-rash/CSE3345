/*
 * Angular library
 * */
import {
	Component,
	OnInit,
	Input,
	Output,
	EventEmitter
} from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

/*
 * Models
 * */
import { ProductReview } from '../../domain';

@Component({
	selector: 'app-product-reviews',
	templateUrl: './product-reviews.component.html',
	styleUrls: ['./product-reviews.component.css']
})
export class ProductReviewsComponent implements OnInit {

	@Input()
	public reviews: Array<ProductReview> = new Array<ProductReview>();

	@Output()
	public addedReview = new EventEmitter<ProductReview>();

	public newRating: number;
	public newReview: ProductReview = new ProductReview();

	constructor(
		private router: Router
	) { }

	ngOnInit() { }

	addReview() {
		this.newReview.date = new Date();
		this.newReview.productId = +this.router.url.split('/')[2];
		this.reviews.push(this.newReview);
		this.addedReview.emit(this.newReview);
		this.newReview = new ProductReview();
	}

}
