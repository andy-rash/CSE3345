/*
 * Angular library
 * */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/*
 * Modules
 * */
import { StoreRoutingModule } from './store-routing.module';

/*
 * Components
 * */
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductReviewsComponent } from './product-reviews/product-reviews.component';
import { RatingComponent } from './rating/rating.component';
import { StoreHeaderComponent } from './store-header/store-header.component';

/*
 * Services
 * */
import {
	CartService,
	ProductRepository,
	ProductReviewRepository
} from '../domain';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		HttpClientModule,
		StoreRoutingModule
	],
	declarations: [
		CartComponent,
		ProductDetailsComponent,
		ProductListComponent,
		ProductReviewsComponent,
		RatingComponent,
		StoreHeaderComponent
	],
	exports: [
		ProductDetailsComponent,
		StoreHeaderComponent
	],
	providers: [
		CartService,
		ProductRepository,
		ProductReviewRepository
	]
})
export class StoreModule { }
