import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomMealTypeComponent } from './random-meal-type.component';

describe('RandomMealTypeComponent', () => {
  let component: RandomMealTypeComponent;
  let fixture: ComponentFixture<RandomMealTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RandomMealTypeComponent]
    });
    fixture = TestBed.createComponent(RandomMealTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
