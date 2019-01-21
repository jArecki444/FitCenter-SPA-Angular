import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/_services/product.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Product } from 'src/app/_models/Product';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-details-user-products',
  templateUrl: './details-user-products.component.html',
  styleUrls: ['./details-user-products.component.css']
})
export class DetailsUserProductsComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource<Product>();
  userProducts: Product[];

  constructor(
    private productsService: ProductService,
    private alertify: AlertifyService
  ) {}

  displayedColumns = ['name', 'proteins', 'carbohydrates', 'fat', 'kcal'];

  ngOnInit() {
    this.loadUserProductsToTable();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  loadUserProductsToTable() {
    this.productsService.getUserProducts().subscribe(
      userProductsResponse => {
        this.userProducts = userProductsResponse.successResult;
        this.dataSource.data = this.userProducts;
      },
      error => {
        this.alertify.error(error);
      }
    );
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
