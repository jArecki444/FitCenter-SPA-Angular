import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { AlertifyService } from '../../_services/alertify.service';
import { MealsService } from '../../_services/meals.service';
import { AuthService } from '../../_services/auth.service';

enum FormControlNames {
  PRODUCT_NAME = 'name',
  INGREDIENT_1 = 'proteins',
  INGREDIENT_2 = 'carbohydrates',
  INGREDIENT_3 = 'fat',
  CALORIFIC_VALUE = 'kcal',
}

@Component({
  selector: 'app-creation-user-product',
  templateUrl: './creation-user-product.component.html',
  styleUrls: ['./creation-user-product.component.css']
})
export class CreationUserProductComponent implements OnInit {
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
