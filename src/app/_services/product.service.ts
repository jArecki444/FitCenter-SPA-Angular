import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../_models/Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArrayResponse } from '../_models/response';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  createUserProduct(product: Product) {
    return this.http.post(
      this.baseUrl + 'Products/', product
    );
  }

  getUserProducts(): Observable<ArrayResponse<Product>> {
    return this.http.get<ArrayResponse<Product>>(
      this.baseUrl + 'Products/AllUserProducts'
    );
  }
}
