/*
 * Angular library
 * */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*
 * Modules
 * */

/*
 * Components
 * */
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
	{ path: 'cart', component: CartComponent },
	{ path: 'products', component: ProductListComponent },
	{ path: 'products/:id', component: ProductDetailsComponent }
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class StoreRoutingModule { }
