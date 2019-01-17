import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArrayResponse } from '../_models/response';
import { Meal } from '../_models/meal';

@Injectable({
  providedIn: 'root'
})
export class MealsService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getUserMeals(): Observable<ArrayResponse<Meal>> {
    return this.http.get<ArrayResponse<Meal>>(
      this.baseUrl + 'Meals/AllUserMeals'
    );
  }
}
