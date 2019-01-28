import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { EditUser } from '../_models/editUser';
import { SingleResponse } from '../_models/response';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getUser(): Observable<SingleResponse<User>> {
    return this.http.get<SingleResponse<User>>(this.baseUrl + 'users/');
  }

  editUser(editUser: EditUser) {
    return this.http.put(this.baseUrl + 'users/', editUser);
  }
}
