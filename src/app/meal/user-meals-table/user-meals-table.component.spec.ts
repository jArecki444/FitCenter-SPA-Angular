
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMealsTableComponent } from './user-meals-table.component';

describe('UserMealsTableComponent', () => {
  let component: UserMealsTableComponent;
  let fixture: ComponentFixture<UserMealsTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMealsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserMealsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
