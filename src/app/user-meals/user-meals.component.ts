import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, Validators, FormBuilder, FormGroup } from '@angular/forms';

import { Product } from '../_models/Product';
import { AlertifyService } from '../_services/alertify.service';
import { MealsService } from '../_services/meals.service';
import { AuthService } from '../_services/auth.service';

enum FormControlNames {
  PRODUCT_NAME = 'name',
  INGREDIENT_1 = 'proteins',
  INGREDIENT_2 = 'carbohydrates',
  INGREDIENT_3 = 'fat',
  CALORIFIC_VALUE = 'kcal',
}

@Component({
  selector: 'app-user-meals',
  templateUrl: './user-meals.component.html',
  styleUrls: ['./user-meals.component.css']
})
export class UserMealsComponent implements OnInit {
  productForm: FormGroup;
  formControlNames = FormControlNames;

  constructor(
    private formBuilder: FormBuilder,
    private alertify: AlertifyService,
    private mealsService: MealsService,
    private authService: AuthService) { }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      [FormControlNames.PRODUCT_NAME]: ['', [Validators.required, Validators.maxLength(100)]],
      [FormControlNames.INGREDIENT_1]: ['', [Validators.required, Validators.maxLength(100)]],
      [FormControlNames.INGREDIENT_2]: ['', [Validators.required, Validators.maxLength(100)]],
      [FormControlNames.INGREDIENT_3]: ['', [Validators.required, Validators.maxLength(100)]],
      [FormControlNames.CALORIFIC_VALUE]: ['', [Validators.required, Validators.maxLength(100)]],
    });
  }

  onProductFormSubmit() {
    this.mealsService.createUserProduct(this.authService.decodedToken.nameid, this.productForm.value).subscribe(next => {
      this.alertify.success('Produkt został zapisany!');
    }, error => {
      this.alertify.error(error);
    });
  }
}
