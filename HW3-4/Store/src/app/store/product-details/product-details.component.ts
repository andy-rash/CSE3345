import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Product, ProductReview } from '../../domain';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

    public product: Product;
    public imgSrcRoot: string = 'assets/img/';
    public imgSrc: string;

    constructor() { }
    
    ngOnInit() {

        this.product = new Product(
            131395,
            'Jif Extra Crunchy Peanut Butter, 16 Ounce',
            'Jif Extra Crunchy Peanut Butter. Contains no preservatives. Not made with genetically modified ingredients. Jif Extra Crunchy Peanut Butter is gluten free.',
            'product_pb_crunchy-16oz.png',
            5.99,
            new Array<ProductReview>()
        );
        this.imgSrc = `${this.imgSrcRoot}${this.product.imageName}`

    }

}
