import { Component, OnInit } from '@angular/core';
import { UserExercises } from '../_models/userExercises';
import { ExercisesService } from '../_services/exercises.service';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-user-exercises',
  templateUrl: './user-exercises.component.html',
  styleUrls: ['./user-exercises.component.css']
})
export class UserExercisesComponent implements OnInit {
  userExercises: UserExercises;
  userId: number;

  constructor(private authService: AuthService, private exercisesService: ExercisesService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.userId = this.authService.decodedToken.nameid;
    this.loadUserExercises();
  }

  loadUserExercises() {
    this.exercisesService.getUserExercises(this.userId).subscribe((userExercisesResponse: UserExercises) => {
  this.userExercises = userExercisesResponse;
  }, error => {
    this.alertify.error(error);
  });
}
}
