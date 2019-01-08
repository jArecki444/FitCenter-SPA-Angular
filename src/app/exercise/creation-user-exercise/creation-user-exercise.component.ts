import { Component, OnInit } from '@angular/core';
import { UserExercises } from '../../_models/userExercises';
import { ExercisesService } from '../../_services/exercises.service';
import { AlertifyService } from '../../_services/alertify.service';
import { AuthService } from '../../_services/auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

enum FormControlNames {
  EXERCISE_NAME = 'name',
  MUSCLE_GROUP = 'muscleGroup'
}
@Component({
  selector: 'app-creation-user-exercise',
  templateUrl: './creation-user-exercise.component.html',
  styleUrls: ['./creation-user-exercise.component.css']
})
export class CreationUserExerciseComponent implements OnInit {
  exerciseForm: FormGroup;
  userExercises: UserExercises;
  userId: number;
  formControlNames = FormControlNames;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private exercisesService: ExercisesService,
    private alertify: AlertifyService
  ) {}

  ngOnInit() {
    this.userId = this.authService.decodedToken.nameid;
    this.loadUserExercises();
    this.exerciseForm = this.formBuilder.group({
      [FormControlNames.EXERCISE_NAME]: [
        '',
        [Validators.required, Validators.maxLength(100)]
      ],
      [FormControlNames.MUSCLE_GROUP]: [
        '',
        [Validators.required, Validators.maxLength(100)]
      ]
    });
  }
  onExerciseFormSubmit() {
    this.exercisesService
      .postUserExercise(
        this.authService.decodedToken.nameid,
        this.exerciseForm.value
      )
      .subscribe(
        next => {
          this.alertify.success('Ćwiczenie zostało zapisane!');
        },
        error => {
          this.alertify.error(error);
        }
      );
  }

  loadUserExercises() {
    this.exercisesService.getUserExercises(this.userId).subscribe(
      (userExercisesResponse: UserExercises) => {
        this.userExercises = userExercisesResponse;
      },
      error => {
        this.alertify.error(error);
      }
    );
  }
}
