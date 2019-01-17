import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsUserProductsComponent } from './details-user-products.component';

describe('DetailsUserProductsComponent', () => {
  let component: DetailsUserProductsComponent;
  let fixture: ComponentFixture<DetailsUserProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsUserProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsUserProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
