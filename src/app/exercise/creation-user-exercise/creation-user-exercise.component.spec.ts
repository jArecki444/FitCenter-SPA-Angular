import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationUserExerciseComponent } from './creation-user-exercise.component';

describe('CreationUserExerciseComponent', () => {
  let component: CreationUserExerciseComponent;
  let fixture: ComponentFixture<CreationUserExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationUserExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationUserExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
