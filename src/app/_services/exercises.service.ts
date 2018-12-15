import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { UserExercises } from '../_models/userExercises';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  constructor(private http: HttpClient) {}
  baseUrl = environment.apiUrl;

  getUserExercises(id): Observable<UserExercises> {
    return this.http.get<UserExercises>(this.baseUrl + 'Exercises/' + id, httpOptions);
  }
}
