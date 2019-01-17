import { Component, OnInit } from '@angular/core';
import { ExercisesService } from '../../_services/exercises.service';
import { AlertifyService } from '../../_services/alertify.service';
import { AuthService } from '../../_services/auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Exercise } from 'src/app/_models/Exercise';

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
  userId: number;
  formControlNames = FormControlNames;

  constructor(
    private formBuilder: FormBuilder,
    private exercisesService: ExercisesService,
    private alertify: AlertifyService
  ) {}

  ngOnInit() {
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
    this.exercisesService.postUserExercise(this.exerciseForm.value).subscribe(
      next => {
        this.alertify.success('Ćwiczenie zostało zapisane!');
      },
      error => {
        this.alertify.error(error);
      }
    );
  }
}
