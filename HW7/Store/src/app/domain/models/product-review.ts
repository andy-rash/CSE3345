export class ProductReview {

	productId: number;
	userName: string;
	rating: number;
	date: Date;
	comment: string;

	constructor(
		productId: number = 0,
		userName: string = "",
		rating: number = 0,
		date: Date = new Date(),
		comment: string = ""
	) {
		this.productId = productId;
		this.userName = userName;
		this.rating = rating;
		this.date = date;

		if(comment) {
			this.comment = comment
		} else {
			this.comment = ""
		}

	}

}
