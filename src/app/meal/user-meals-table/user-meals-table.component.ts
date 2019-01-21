import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Meal } from 'src/app/_models/meal';
import { MealsService } from 'src/app/_services/meals.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-user-meals-table',
  templateUrl: './user-meals-table.component.html',
  styleUrls: ['./user-meals-table.component.css']
})
export class UserMealsTableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource =  new MatTableDataSource<Meal>();
  userMeals: Meal[] = [];

constructor(
  private mealsService: MealsService,
  private alertify: AlertifyService
) { }

  displayedColumns = ['name', 'proteins', 'carbohydrates', 'fat', 'calories'];

  ngOnInit() {
    this.loadUserMealsToTable();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  loadUserMealsToTable() {
    this.mealsService.getUserMeals().subscribe(
      userMealsResponse => {
        this.userMeals = userMealsResponse.successResult;
        this.dataSource.data = this.userMeals;
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
