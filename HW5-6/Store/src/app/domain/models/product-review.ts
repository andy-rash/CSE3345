export class ProductReview {

	userName: string;
	rating: number;
	date: Date;
	comment: string;

	constructor(
		userName: string = "",
		rating: number = 0,
		date: Date = new Date(),
		comment: string = ""
	) {
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
