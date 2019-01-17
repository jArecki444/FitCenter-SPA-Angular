import { Component, OnInit } from '@angular/core';
import { Meal } from 'src/app/_models/meal';
import { MealsService } from 'src/app/_services/meals.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-details-user-meals',
  templateUrl: './details-user-meals.component.html',
  styleUrls: ['./details-user-meals.component.css']
})
export class DetailsUserMealsComponent implements OnInit {
userMeals: Meal[];

constructor(
  private mealsService: MealsService,
  private alertify: AlertifyService
) { }

  ngOnInit() {
    this.loadUserMeals();
  }
  loadUserMeals() {
    this.mealsService.getUserMeals().subscribe(
      userMealsResponse => {
        this.userMeals = userMealsResponse.successResult;
      },
      error => {
        this.alertify.error(error);
      }
    );
  }
}
