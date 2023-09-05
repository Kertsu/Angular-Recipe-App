import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishTypesComponent } from './dish-types.component';

describe('DishTypesComponent', () => {
  let component: DishTypesComponent;
  let fixture: ComponentFixture<DishTypesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DishTypesComponent]
    });
    fixture = TestBed.createComponent(DishTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
