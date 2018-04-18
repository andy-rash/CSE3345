/*
 * Angular library
 * */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

/*
 * Modules
 * */
import { StoreModule } from './store/store.module';

/*
 * Components
 * */
import { AppComponent } from './app.component';

let defaultRoute = 'products';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		StoreModule,
		RouterModule.forRoot([
			{ path: '', redirectTo: defaultRoute, pathMatch: 'full' }
		])
	],
	providers: [ ],
	bootstrap: [
		AppComponent,
	]
})
export class AppModule { }
