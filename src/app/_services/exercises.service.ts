import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { UserExercises } from '../_models/userExercises';
import { Exercise } from '../_models/Exercise';
import { ArrayResponse } from '../_models/response';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {
  constructor(private http: HttpClient) {}
  baseUrl = environment.apiUrl;

  getUserExercises(): Observable<ArrayResponse<Exercise>> {
    return this.http.get<ArrayResponse<Exercise>>(
      this.baseUrl + 'Exercises/AllUserExercises'
    );
  }

  postUserExercise(exercise: Exercise) {
    return this.http.post(this.baseUrl + 'Exercises/', exercise);
  }
}
