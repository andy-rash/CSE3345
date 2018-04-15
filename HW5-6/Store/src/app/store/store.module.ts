/*
 * Angular library
 * */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/*
 * Modules
 * */

/*
 * Components
 * */
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductReviewsComponent } from './product-reviews/product-reviews.component';
import { RatingComponent } from './rating/rating.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule
	],
	declarations: [
		CartComponent,
		ProductDetailsComponent,
		ProductListComponent,
		ProductReviewsComponent,
		RatingComponent
	],
	exports: [
		ProductDetailsComponent,
	],
	providers: [ ]
})
export class StoreModule { }
