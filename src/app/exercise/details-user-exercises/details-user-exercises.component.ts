import { Component, OnInit } from '@angular/core';
import { ExercisesService } from 'src/app/_services/exercises.service';
import { Exercise } from 'src/app/_models/Exercise';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-details-user-exercises',
  templateUrl: './details-user-exercises.component.html',
  styleUrls: ['./details-user-exercises.component.css']
})
export class DetailsUserExercisesComponent implements OnInit {
  userExercises: Exercise[];

  constructor(
    private exercisesService: ExercisesService,
    private alertify: AlertifyService
  ) {}

  ngOnInit() {
    this.loadUserExercises();
  }

  loadUserExercises() {
    this.exercisesService.getUserExercises().subscribe(
      userExercisesResponse => {
        this.userExercises = userExercisesResponse.successResult;
      },
      error => {
        this.alertify.error(error);
      }
    );
  }
}
