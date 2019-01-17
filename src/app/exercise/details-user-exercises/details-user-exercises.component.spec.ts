import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsUserExercisesComponent } from './details-user-exercises.component';

describe('DetailsUserExercisesComponent', () => {
  let component: DetailsUserExercisesComponent;
  let fixture: ComponentFixture<DetailsUserExercisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsUserExercisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsUserExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
