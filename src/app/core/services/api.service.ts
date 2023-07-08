// Libraries Imports
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Local Imports
import { Operation, Category } from '../models';

@Injectable()
export class ApiService {
	private readonly API_URL = 'https://localhost:5001/api';

	constructor(private http: HttpClient) {}

	public getOperations(): Observable<Operation[]> {
		return this.http.get<Operation[]>(`${this.API_URL}/operations`);
	}

	public getOperationById(operationId: number): Observable<Operation> {
		return this.http.get<Operation>(`${this.API_URL}/operations/${operationId}`);
	}

	public getCategories(): Observable<Category[]> {
		return this.http.get<Category[]>(`${this.API_URL}/categories`);
	}

	public getCategoryById(categoryId: number): Observable<Category> {
		return this.http.get<Category>(`${this.API_URL}/categories/${categoryId}`);
	}
}
