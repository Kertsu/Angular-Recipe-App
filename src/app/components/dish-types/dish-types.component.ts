import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dish-types',
  templateUrl: './dish-types.component.html',
  styleUrls: ['./dish-types.component.css']
})
export class DishTypesComponent {
  @Input() dishTypes:any;
}
