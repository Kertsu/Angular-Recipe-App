import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'x-api-key': '8e870c753f64495883a1062a06ef0d31',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class WebService {
  tags: any = [
    'main course',
    'side dish',
    'dessert',
    'appetizer',
    'salad',
    'bread',
    'breakfast',
    'soup',
    'beverage',
    'sauce',
    'marinade',
    'fingerfood',
    'snack',
    'drink',
    'African',
    'Asian',
    'American',
    'British',
    'Cajun',
    'Caribbean',
    'Chinese',
    'Eastern European',
    'European',
    'French',
    'German',
    'Greek',
    'Indian',
    'Irish',
    'Italian',
    'Japanese',
    'Jewish',
    'Korean',
    'Latin American',
    'Mediterranean',
    'Mexican',
    'Middle Eastern',
    'Nordic',
    'Southern',
    'Spanish',
    'Thai',
    'Vietnamese',
  ];

  mealTypes: any = [
    'main course',
    'side dish',
    'dessert',
    'appetizer',
    'salad',
    'bread',
    'breakfast',
    'soup',
    'beverage',
    'sauce',
    'marinade',
    'fingerfood',
    'snack',
    'drink',
  ]
 
  constructor(private http: HttpClient) {}

  baseUrl = `https://api.spoonacular.com/recipes`;

  getRandom(): Observable<any> {
    const randomIndex = Math.floor(Math.random() * this.tags.length);
    const randomTag = this.tags[randomIndex];

    return this.http.get(`${this.baseUrl}/random?number=10&tags=${randomTag.toLowerCase()}`, httpOptions)
  }

  getRandomMealType(): Observable<any>{
    const randomIndex = Math.floor(Math.random() * this.mealTypes.length)
    const randomMealType = this.mealTypes[randomIndex]
    return this.http.get(`${this.baseUrl}/random?number=10&tags=${randomMealType.toLowerCase()}`, httpOptions).pipe(
      map((response:any) => {

        return { responseData: response, tag: randomMealType };
      })
    );
  }
  
}
