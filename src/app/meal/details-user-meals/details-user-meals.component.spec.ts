import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsUserMealsComponent } from './details-user-meals.component';

describe('DetailsUserMealsComponent', () => {
  let component: DetailsUserMealsComponent;
  let fixture: ComponentFixture<DetailsUserMealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsUserMealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsUserMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
