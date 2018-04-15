import { ProductReview } from './product-review';

export class Product {

	id: number;
	name: string;
	description: string;
	imageName: string;
	price: number;
	reviews: Array<ProductReview>;

	constructor(
		id: number,
		name: string,
		description: string,
		imageName: string,
		price: number,
		reviews: Array<ProductReview>
	) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.imageName = imageName;
		this.price = price;
		this.reviews = reviews;
	}

}
