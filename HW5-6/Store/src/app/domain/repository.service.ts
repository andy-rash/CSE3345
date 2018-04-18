/*
 * Angular library
 * */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/*
 * RxJS
 * */
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

export abstract class Repository<T> {

	protected abstract endPoint;

	protected httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': 'rrash'
		})
	};

	constructor(protected httpClient: HttpClient) {}

	public add(item: T): Observable<T> {
		return this.httpClient.post(
			`${this.endPoint}`,
			item,
			this.httpOptions
		).pipe(
			catchError(this.handleException)
		);
	}

	public delete(id: number): Observable<T> {
		return this.httpClient.delete(
			`${this.endPoint}/${id}`,
			this.httpOptions
		).pipe(
			catchError(this.handleException)
		);
	}

	public get(): Observable<T[]> {
		return this.httpClient.get(
			`${this.endPoint}`,
			this.httpOptions
		).pipe(
			catchError(this.handleException)
		);
	}

	public getByID(id: number): Observable<T> {
		return this.httpClient.get(
			`${this.endPoint}/${id}`,
			this.httpOptions
		).pipe(
			catchError(this.handleException)
		);
	}

	public update(id: number, item: T): Observable<T> {
		return this.httpClient.put(
			`${this.endPoint}/${id}`,
			item,
			this.httpOptions
		).pipe(
			catchError(this.handleException)
		);
	}

	protected handleException(exception: any) {
		var message = `${exception.status} : ${exception.statusText}\r\n${exception.message}`;
		alert(message);
		return Observable.throw(exception);
	}

}
