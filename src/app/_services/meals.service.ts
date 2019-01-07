import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Product } from '../_models/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealsService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  createUserProduct(userId: number, product: Product) {
    return this.http.post(
      this.baseUrl + 'Meals/Add?userId=' + userId, product
    );
  }
}
