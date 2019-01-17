import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationUserProductComponent } from './creation-user-product.component';

describe('CreationUserProductComponent', () => {
  let component: CreationUserProductComponent;
  let fixture: ComponentFixture<CreationUserProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationUserProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationUserProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
