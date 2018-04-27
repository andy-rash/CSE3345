/*
 * Angular library
 * */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/*
 * Models
 * */
import { Product } from './models/product';

/*
 * Services
 * */
import { Repository } from './repository.service';

@Injectable()
export class ProductRepository extends Repository<Product> {

	protected endPoint = 'http://api.johnlawrimore.com/store/products';

	constructor(protected httpClient: HttpClient) {
		super(httpClient);
	}

}
