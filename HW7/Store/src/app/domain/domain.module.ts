/*
 * Angular library
 * */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*
 * Services
 * */
import {
	CartService,
	ProductRepository,
	ProductReviewRepository
} from './';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [],
	providers: [
		CartService,
		ProductRepository,
		ProductReviewRepository
	]
})
export class DomainModule { }
