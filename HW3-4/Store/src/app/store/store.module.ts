import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductReviewsComponent } from './product-reviews/product-reviews.component';
import { RatingComponent } from './rating/rating.component';

@NgModule({
  imports: [
      CommonModule,
      FormsModule
    ],
    declarations: [
        ProductDetailsComponent,
        ProductReviewsComponent,
        RatingComponent
    ],
    exports: [
        ProductDetailsComponent,
    ],
})
export class StoreModule { }
