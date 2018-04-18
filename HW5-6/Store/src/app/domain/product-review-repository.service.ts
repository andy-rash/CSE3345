/*
 * Angular library
 * */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/*
 * RxJS
 * */
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

/*
 * Models
 * */
import { ProductReview } from './models/product-review';

/*
 * Services
 * */
import { Repository } from './repository.service';

@Injectable()
export class ProductReviewRepository extends Repository<ProductReview> {

	protected endPoint = 'http://api.johnlawrimore.com/store/products/:productID/reviews';

	constructor(protected httpClient: HttpClient) {
		super(httpClient);
	}

	public add(item: ProductReview): Observable<ProductReview> {

		let productIdRegExp = /:productID/g
		this.endPoint = this.endPoint.replace(productIdRegExp, String(item.productId));

		return super.add(item);
	}

}
