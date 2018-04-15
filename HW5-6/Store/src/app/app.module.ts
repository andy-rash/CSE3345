/*
 * Angular library
 * */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*
 * Modules
 * */
import { StoreModule } from './store/store.module';

/*
 * Components
 * */
import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		StoreModule
	],
	providers: [ ],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
