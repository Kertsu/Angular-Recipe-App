import { Component, Input , AfterViewInit} from '@angular/core';
import { randomFood } from 'src/app/models/Recipe';

@Component({
  selector: 'app-random-meal-type',
  templateUrl: './random-meal-type.component.html',
  styleUrls: ['./random-meal-type.component.css']
})
export class RandomMealTypeComponent implements AfterViewInit{
  @Input() meals!:randomFood[];
  @Input() isLoading:any;
  @Input() tag:any;

  ngAfterViewInit(): void {
      console.log('afteview',this.meals)
  }
}
