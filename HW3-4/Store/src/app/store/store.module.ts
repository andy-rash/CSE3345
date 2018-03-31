import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { ProductReviewsComponent } from '../product-reviews/product-reviews.component';
import { RatingComponent } from '../rating/rating.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductDetailsComponent, ProductReviewsComponent, RatingComponent]
})
export class StoreModule { }
