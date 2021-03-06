import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/_services/product.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Product } from 'src/app/_models/Product';

@Component({
  selector: 'app-details-user-products',
  templateUrl: './details-user-products.component.html',
  styleUrls: ['./details-user-products.component.css']
})
export class DetailsUserProductsComponent implements OnInit {
userProducts: Product[];

  constructor(
    private productsService: ProductService,
    private alertify: AlertifyService
  ) { }

  ngOnInit() {
    this.loadUserProducts();
  }

  loadUserProducts() {
    this.productsService.getUserProducts().subscribe(
      userProductsResponse => {
        this.userProducts = userProductsResponse.successResult;
      },
      error => {
        this.alertify.error(error);
      }
    );
  }
}
