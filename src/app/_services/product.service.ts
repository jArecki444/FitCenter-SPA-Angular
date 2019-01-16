import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../_models/Product';
import { HttpClient } from '@angular/common/http';

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
}
