import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ProductReview } from '../../domain';

@Component({
  selector: 'app-product-reviews',
  templateUrl: './product-reviews.component.html',
  styleUrls: ['./product-reviews.component.css']
})
export class ProductReviewsComponent implements OnInit {

    @Input()
    public reviews: Array<ProductReview> = new Array<ProductReview>();

    public newRating: number;
    public newReview: ProductReview = new ProductReview();

    constructor() { }

    ngOnInit() { }

    addReview() {
    	this.newReview.date = new Date();
    	this.reviews.push(this.newReview);
    	this.newReview = new ProductReview();
    }

}
