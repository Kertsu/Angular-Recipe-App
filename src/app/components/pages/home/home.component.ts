import { Component , OnInit} from '@angular/core';
import { WebService } from 'src/app/services/web.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  mealType!:string;
  meals: any[]= []
  tag:string='';
  isLoading!: boolean ;


  dishTypes =[
    "breakfast", 'lunch', 'snack', 'dinner', 'appetizer'
  ]

  constructor(private webService: WebService){ 
  }

  ngOnInit(): void {
    this.isLoading = true
      this.webService.getRandomMealType().subscribe((result) =>{
        this.tag = result.tag;
        this.meals = result.responseData.recipes
        this.isLoading = false;
        console.log(result)
      })

    //   this.meals = [
    //     {
      
    //         "isFavorite": false,
    //         "vegetarian": true,
    //         "vegan": false,
    //         "glutenFree": false,
    //         "dairyFree": false,
    //         "veryHealthy": false,
    //         "cheap": false,
    //         "veryPopular": false,
    //         "sustainable": false,
    //         "lowFodmap": false,
    //         "weightWatcherSmartPoints": 21,
    //         "gaps": "no",
    //         "preparationMinutes": -1,
    //         "cookingMinutes": -1,
    //         "aggregateLikes": 25,
    //         "healthScore": 11,
    //         "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
    //         "license": "CC BY 3.0",
    //         "sourceName": "Foodista",
    //         "pricePerServing": 226.97,
    //         "extendedIngredients": [
    //             {
    //                 "id": 18372,
    //                 "aisle": "Baking",
    //                 "image": "white-powder.jpg",
    //                 "consistency": "SOLID",
    //                 "name": "baking soda",
    //                 "nameClean": "baking soda",
    //                 "original": "1/2 teaspoon baking soda",
    //                 "originalName": "baking soda",
    //                 "amount": 0.5,
    //                 "unit": "teaspoon",
    //                 "meta": [],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 0.5,
    //                         "unitShort": "tsps",
    //                         "unitLong": "teaspoons"
    //                     },
    //                     "metric": {
    //                         "amount": 0.5,
    //                         "unitShort": "tsps",
    //                         "unitLong": "teaspoons"
    //                     }
    //                 }
    //             },
    //             {
    //                 "id": 9040,
    //                 "aisle": "Produce",
    //                 "image": "bananas.jpg",
    //                 "consistency": "SOLID",
    //                 "name": "banana",
    //                 "nameClean": "banana",
    //                 "original": "½ cups Banana, Mashed, Divided",
    //                 "originalName": "Banana, Mashed, Divided",
    //                 "amount": 0.5,
    //                 "unit": "cups",
    //                 "meta": [
    //                     "divided",
    //                     "mashed"
    //                 ],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 0.5,
    //                         "unitShort": "cups",
    //                         "unitLong": "cups"
    //                     },
    //                     "metric": {
    //                         "amount": 75.0,
    //                         "unitShort": "g",
    //                         "unitLong": "grams"
    //                     }
    //                 }
    //             },
    //             {
    //                 "id": 9050,
    //                 "aisle": "Produce",
    //                 "image": "blueberries.jpg",
    //                 "consistency": "SOLID",
    //                 "name": "blueberries",
    //                 "nameClean": "blueberries",
    //                 "original": "Fresh blueberries",
    //                 "originalName": "Fresh blueberries",
    //                 "amount": 2.0,
    //                 "unit": "servings",
    //                 "meta": [
    //                     "fresh"
    //                 ],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 2.0,
    //                         "unitShort": "servings",
    //                         "unitLong": "servings"
    //                     },
    //                     "metric": {
    //                         "amount": 2.0,
    //                         "unitShort": "servings",
    //                         "unitLong": "servings"
    //                     }
    //                 }
    //             },
    //             {
    //                 "id": 1124,
    //                 "aisle": "Milk, Eggs, Other Dairy",
    //                 "image": "egg-white.jpg",
    //                 "consistency": "SOLID",
    //                 "name": "egg whites",
    //                 "nameClean": "egg whites",
    //                 "original": "½ cups Egg Whites",
    //                 "originalName": "Egg Whites",
    //                 "amount": 0.5,
    //                 "unit": "cups",
    //                 "meta": [],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 0.5,
    //                         "unitShort": "cups",
    //                         "unitLong": "cups"
    //                     },
    //                     "metric": {
    //                         "amount": 121.5,
    //                         "unitShort": "ml",
    //                         "unitLong": "milliliters"
    //                     }
    //                 }
    //             },
    //             {
    //                 "id": 1001256,
    //                 "aisle": "Milk, Eggs, Other Dairy",
    //                 "image": "white-cream.png",
    //                 "consistency": "LIQUID",
    //                 "name": "greek yogurt",
    //                 "nameClean": "plain greek yogurt",
    //                 "original": "½ cups Greek Yogurt, Plain",
    //                 "originalName": "Greek Yogurt, Plain",
    //                 "amount": 0.5,
    //                 "unit": "cups",
    //                 "meta": [
    //                     "plain"
    //                 ],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 0.5,
    //                         "unitShort": "cups",
    //                         "unitLong": "cups"
    //                     },
    //                     "metric": {
    //                         "amount": 100.0,
    //                         "unitShort": "ml",
    //                         "unitLong": "milliliters"
    //                     }
    //                 }
    //             },
    //             {
    //                 "id": 2047,
    //                 "aisle": "Spices and Seasonings",
    //                 "image": "salt.jpg",
    //                 "consistency": "SOLID",
    //                 "name": "salt",
    //                 "nameClean": "table salt",
    //                 "original": "1 teaspoon salt",
    //                 "originalName": "salt",
    //                 "amount": 1.0,
    //                 "unit": "teaspoon",
    //                 "meta": [],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 1.0,
    //                         "unitShort": "tsp",
    //                         "unitLong": "teaspoon"
    //                     },
    //                     "metric": {
    //                         "amount": 1.0,
    //                         "unitShort": "tsp",
    //                         "unitLong": "teaspoon"
    //                     }
    //                 }
    //             },
    //             {
    //                 "id": 19335,
    //                 "aisle": "Baking",
    //                 "image": "sugar-in-bowl.png",
    //                 "consistency": "SOLID",
    //                 "name": "sugar",
    //                 "nameClean": "sugar",
    //                 "original": "3/4 cup sugar",
    //                 "originalName": "sugar",
    //                 "amount": 0.75,
    //                 "unit": "cup",
    //                 "meta": [],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 0.75,
    //                         "unitShort": "cups",
    //                         "unitLong": "cups"
    //                     },
    //                     "metric": {
    //                         "amount": 150.0,
    //                         "unitShort": "g",
    //                         "unitLong": "grams"
    //                     }
    //                 }
    //             },
    //             {
    //                 "id": 2050,
    //                 "aisle": "Baking",
    //                 "image": "vanilla-extract.jpg",
    //                 "consistency": "LIQUID",
    //                 "name": "vanilla extract",
    //                 "nameClean": "vanilla extract",
    //                 "original": "1 teaspoon vanilla extract",
    //                 "originalName": "vanilla extract",
    //                 "amount": 1.0,
    //                 "unit": "teaspoon",
    //                 "meta": [],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 1.0,
    //                         "unitShort": "tsp",
    //                         "unitLong": "teaspoon"
    //                     },
    //                     "metric": {
    //                         "amount": 1.0,
    //                         "unitShort": "tsp",
    //                         "unitLong": "teaspoon"
    //                     }
    //                 }
    //             },
    //             {
    //                 "id": 10020080,
    //                 "aisle": "Baking",
    //                 "image": "flour.png",
    //                 "consistency": "SOLID",
    //                 "name": "pastry flour",
    //                 "nameClean": "whole wheat pastry flour",
    //                 "original": "½ cups Whole Wheat Pastry Flour",
    //                 "originalName": "Whole Wheat Pastry Flour",
    //                 "amount": 0.5,
    //                 "unit": "cups",
    //                 "meta": [
    //                     "whole wheat"
    //                 ],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 0.5,
    //                         "unitShort": "cups",
    //                         "unitLong": "cups"
    //                     },
    //                     "metric": {
    //                         "amount": 60.0,
    //                         "unitShort": "g",
    //                         "unitLong": "grams"
    //                     }
    //                 }
    //             }
    //         ],
    //         "id": 635418,
    //         "title": "Blueberry Banana Pancakes",
    //         "readyInMinutes": 45,
    //         "servings": 2,
    //         "sourceUrl": "http://www.foodista.com/recipe/QNQXL7YN/blueberry-banana-pancakes",
    //         "image": "https://spoonacular.com/recipeImages/635418-556x370.jpg",
    //         "imageType": "jpg",
    //         "summary": "Blueberry Banana Pancakes is a <b>lacto ovo vegetarian</b> recipe with 2 servings. One serving contains <b>576 calories</b>, <b>17g of protein</b>, and <b>2g of fat</b>. For <b>$2.27 per serving</b>, this recipe <b>covers 19%</b> of your daily requirements of vitamins and minerals. It works well as a breakfast. A mixture of vanillan extract, banana, blueberries, and a handful of other ingredients are all it takes to make this recipe so yummy. A few people made this recipe, and 25 would say it hit the spot. From preparation to the plate, this recipe takes around <b>45 minutes</b>. It is brought to you by Foodista. All things considered, we decided this recipe <b>deserves a spoonacular score of 61%</b>. This score is good. Try <a href=\"https://spoonacular.com/recipes/blueberry-banana-pancakes-446357\">blueberry banana pancakes</a>, <a href=\"https://spoonacular.com/recipes/banana-blueberry-pancakes-1404959\">Banana Blueberry Pancakes</a>, and <a href=\"https://spoonacular.com/recipes/banana-blueberry-pancakes-401560\">Banana Blueberry Pancakes</a> for similar recipes.",
    //         "cuisines": [],
    //         "dishTypes": [
    //             "morning meal",
    //             "brunch",
    //             "breakfast"
    //         ],
    //         "diets": [
    //             "lacto ovo vegetarian"
    //         ],
    //         "occasions": [],
    //         "instructions": "<ol><li>Mix greek yogurt, 1/4 cup banana, egg whites & vanilla extract into a small bowl</li><li>In a separate bowl combine flour, baking soda, sugar, & salt</li><li>Combine and whisk till evenly mixed</li><li>Fold in 1/2 cup blueberries</li><li>Place 1/4-cup batter onto non-stick skillet and cook till bubbles start appearing through the top of the pancake and then flip. NOTE: Cook on medium heat and I flattened out my batter with the spatula to cook more evenly.</li><li>About 1-2 minutes on each side</li><li>For the blueberry sauce:</li><li>In a sauce pan, add remaining banana and blueberries and stir until thick, mashing blueberries, about 5-7 minutes. Pour over top of pancakes.</li><li>Note: I used frozen blueberries for sauce and fresh for pancakes.</li><li>Makes  8 pancakes total  serving size 2</li><li>Calorie per serving (4 pancakes total)  231, Fat: .08, Cholesterol: 0, Sodium: 391, Potassium: 304, Carbs: 42, Fiber: 6.6, Sugar: 12, Protein: 14.3</li></ol>",
    //         "analyzedInstructions": [
    //             {
    //                 "name": "",
    //                 "steps": [
    //                     {
    //                         "number": 1,
    //                         "step": "Mix greek yogurt, 1/4 cup banana, egg whites & vanilla extract into a small bowl",
    //                         "ingredients": [
    //                             {
    //                                 "id": 2050,
    //                                 "name": "vanilla extract",
    //                                 "localizedName": "vanilla extract",
    //                                 "image": "vanilla-extract.jpg"
    //                             },
    //                             {
    //                                 "id": 1256,
    //                                 "name": "greek yogurt",
    //                                 "localizedName": "greek yogurt",
    //                                 "image": "plain-yogurt.jpg"
    //                             },
    //                             {
    //                                 "id": 1124,
    //                                 "name": "egg whites",
    //                                 "localizedName": "egg whites",
    //                                 "image": "egg-white.jpg"
    //                             },
    //                             {
    //                                 "id": 9040,
    //                                 "name": "banana",
    //                                 "localizedName": "banana",
    //                                 "image": "bananas.jpg"
    //                             }
    //                         ],
    //                         "equipment": [
    //                             {
    //                                 "id": 404783,
    //                                 "name": "bowl",
    //                                 "localizedName": "bowl",
    //                                 "image": "bowl.jpg"
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "number": 2,
    //                         "step": "In a separate bowl combine flour, baking soda, sugar, & salt",
    //                         "ingredients": [
    //                             {
    //                                 "id": 18372,
    //                                 "name": "baking soda",
    //                                 "localizedName": "baking soda",
    //                                 "image": "white-powder.jpg"
    //                             },
    //                             {
    //                                 "id": 20081,
    //                                 "name": "all purpose flour",
    //                                 "localizedName": "all purpose flour",
    //                                 "image": "flour.png"
    //                             },
    //                             {
    //                                 "id": 19335,
    //                                 "name": "sugar",
    //                                 "localizedName": "sugar",
    //                                 "image": "sugar-in-bowl.png"
    //                             },
    //                             {
    //                                 "id": 2047,
    //                                 "name": "salt",
    //                                 "localizedName": "salt",
    //                                 "image": "salt.jpg"
    //                             }
    //                         ],
    //                         "equipment": [
    //                             {
    //                                 "id": 404783,
    //                                 "name": "bowl",
    //                                 "localizedName": "bowl",
    //                                 "image": "bowl.jpg"
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "number": 3,
    //                         "step": "Combine and whisk till evenly mixed",
    //                         "ingredients": [],
    //                         "equipment": [
    //                             {
    //                                 "id": 404661,
    //                                 "name": "whisk",
    //                                 "localizedName": "whisk",
    //                                 "image": "whisk.png"
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "number": 4,
    //                         "step": "Fold in 1/2 cup blueberries",
    //                         "ingredients": [
    //                             {
    //                                 "id": 9050,
    //                                 "name": "blueberries",
    //                                 "localizedName": "blueberries",
    //                                 "image": "blueberries.jpg"
    //                             }
    //                         ],
    //                         "equipment": []
    //                     },
    //                     {
    //                         "number": 5,
    //                         "step": "Place 1/4-cup batter onto non-stick skillet and cook till bubbles start appearing through the top of the pancake and then flip. NOTE: Cook on medium heat and I flattened out my batter with the spatula to cook more evenly.About 1-2 minutes on each side",
    //                         "ingredients": [],
    //                         "equipment": [
    //                             {
    //                                 "id": 404645,
    //                                 "name": "frying pan",
    //                                 "localizedName": "frying pan",
    //                                 "image": "pan.png"
    //                             },
    //                             {
    //                                 "id": 404642,
    //                                 "name": "spatula",
    //                                 "localizedName": "spatula",
    //                                 "image": "spatula-or-turner.jpg"
    //                             }
    //                         ],
    //                         "length": {
    //                             "number": 2,
    //                             "unit": "minutes"
    //                         }
    //                     },
    //                     {
    //                         "number": 6,
    //                         "step": "For the blueberry sauce:In a sauce pan, add remaining banana and blueberries and stir until thick, mashing blueberries, about 5-7 minutes.",
    //                         "ingredients": [
    //                             {
    //                                 "id": 9050,
    //                                 "name": "blueberries",
    //                                 "localizedName": "blueberries",
    //                                 "image": "blueberries.jpg"
    //                             },
    //                             {
    //                                 "id": 9040,
    //                                 "name": "banana",
    //                                 "localizedName": "banana",
    //                                 "image": "bananas.jpg"
    //                             },
    //                             {
    //                                 "id": 0,
    //                                 "name": "sauce",
    //                                 "localizedName": "sauce",
    //                                 "image": ""
    //                             }
    //                         ],
    //                         "equipment": [
    //                             {
    //                                 "id": 404669,
    //                                 "name": "sauce pan",
    //                                 "localizedName": "sauce pan",
    //                                 "image": "sauce-pan.jpg"
    //                             }
    //                         ],
    //                         "length": {
    //                             "number": 7,
    //                             "unit": "minutes"
    //                         }
    //                     },
    //                     {
    //                         "number": 7,
    //                         "step": "Pour over top of pancakes.Note: I used frozen blueberries for sauce and fresh for pancakes.Makes  8 pancakes total  serving size 2Calorie per serving (4 pancakes total)  231, Fat: .08, Cholesterol: 0, Sodium: 391, Potassium: 304, Carbs: 42, Fiber: 6.6, Sugar: 12, Protein: 14.3",
    //                         "ingredients": [
    //                             {
    //                                 "id": 9050,
    //                                 "name": "blueberries",
    //                                 "localizedName": "blueberries",
    //                                 "image": "blueberries.jpg"
    //                             },
    //                             {
    //                                 "id": 0,
    //                                 "name": "sauce",
    //                                 "localizedName": "sauce",
    //                                 "image": ""
    //                             },
    //                             {
    //                                 "id": 19335,
    //                                 "name": "sugar",
    //                                 "localizedName": "sugar",
    //                                 "image": "sugar-in-bowl.png"
    //                             }
    //                         ],
    //                         "equipment": []
    //                     }
    //                 ]
    //             }
    //         ],
    //         "originalId": null,
    //         "spoonacularSourceUrl": "https://spoonacular.com/blueberry-banana-pancakes-635418"
    //     },
    //     {
    //         "isFavorite": false,

    //         "vegetarian": true,
    //         "vegan": false,
    //         "glutenFree": false,
    //         "dairyFree": true,
    //         "veryHealthy": false,
    //         "cheap": false,
    //         "veryPopular": false,
    //         "sustainable": false,
    //         "lowFodmap": false,
    //         "weightWatcherSmartPoints": 3,
    //         "gaps": "no",
    //         "preparationMinutes": -1,
    //         "cookingMinutes": -1,
    //         "aggregateLikes": 13,
    //         "healthScore": 2,
    //         "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
    //         "license": "CC BY 3.0",
    //         "sourceName": "Foodista",
    //         "pricePerServing": 19.16,
    //         "extendedIngredients": [
    //             {
    //                 "id": 18369,
    //                 "aisle": "Baking",
    //                 "image": "white-powder.jpg",
    //                 "consistency": "SOLID",
    //                 "name": "baking powder",
    //                 "nameClean": "baking powder",
    //                 "original": "1 teaspoon Baking Powder",
    //                 "originalName": "Baking Powder",
    //                 "amount": 1.0,
    //                 "unit": "teaspoon",
    //                 "meta": [],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 1.0,
    //                         "unitShort": "tsp",
    //                         "unitLong": "teaspoon"
    //                     },
    //                     "metric": {
    //                         "amount": 1.0,
    //                         "unitShort": "tsp",
    //                         "unitLong": "teaspoon"
    //                     }
    //                 }
    //             },
    //             {
    //                 "id": 9040,
    //                 "aisle": "Produce",
    //                 "image": "bananas.jpg",
    //                 "consistency": "SOLID",
    //                 "name": "bananas",
    //                 "nameClean": "banana",
    //                 "original": "3 mashed very ripe bananas (approximately 1 cup)",
    //                 "originalName": "mashed very ripe bananas (approximately 1 cup)",
    //                 "amount": 3.0,
    //                 "unit": "",
    //                 "meta": [
    //                     "very ripe",
    //                     "mashed",
    //                     "(approximately 1 cup)"
    //                 ],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 3.0,
    //                         "unitShort": "",
    //                         "unitLong": ""
    //                     },
    //                     "metric": {
    //                         "amount": 3.0,
    //                         "unitShort": "",
    //                         "unitLong": ""
    //                     }
    //                 }
    //             },
    //             {
    //                 "id": 9078,
    //                 "aisle": "Produce",
    //                 "image": "cranberries.jpg",
    //                 "consistency": "SOLID",
    //                 "name": "cranberries",
    //                 "nameClean": "cranberries",
    //                 "original": "1 cup fresh or frozen cranberries, cut in half",
    //                 "originalName": "fresh or frozen cranberries, cut in half",
    //                 "amount": 1.0,
    //                 "unit": "cup",
    //                 "meta": [
    //                     "fresh",
    //                     "cut in half"
    //                 ],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 1.0,
    //                         "unitShort": "cup",
    //                         "unitLong": "cup"
    //                     },
    //                     "metric": {
    //                         "amount": 100.0,
    //                         "unitShort": "g",
    //                         "unitLong": "grams"
    //                     }
    //                 }
    //             },
    //             {
    //                 "id": 1123,
    //                 "aisle": "Milk, Eggs, Other Dairy",
    //                 "image": "egg.png",
    //                 "consistency": "SOLID",
    //                 "name": "eggs",
    //                 "nameClean": "egg",
    //                 "original": "2 eggs",
    //                 "originalName": "eggs",
    //                 "amount": 2.0,
    //                 "unit": "",
    //                 "meta": [],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 2.0,
    //                         "unitShort": "",
    //                         "unitLong": ""
    //                     },
    //                     "metric": {
    //                         "amount": 2.0,
    //                         "unitShort": "",
    //                         "unitLong": ""
    //                     }
    //                 }
    //             },
    //             {
    //                 "id": 20081,
    //                 "aisle": "Baking",
    //                 "image": "flour.png",
    //                 "consistency": "SOLID",
    //                 "name": "flour",
    //                 "nameClean": "wheat flour",
    //                 "original": "1 1/2 cups Flour",
    //                 "originalName": "Flour",
    //                 "amount": 1.5,
    //                 "unit": "cups",
    //                 "meta": [],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 1.5,
    //                         "unitShort": "cups",
    //                         "unitLong": "cups"
    //                     },
    //                     "metric": {
    //                         "amount": 187.5,
    //                         "unitShort": "g",
    //                         "unitLong": "grams"
    //                     }
    //                 }
    //             },
    //             {
    //                 "id": 12511111,
    //                 "aisle": "Baking",
    //                 "image": "extract.png",
    //                 "consistency": "LIQUID",
    //                 "name": "orange extract",
    //                 "nameClean": "orange extract",
    //                 "original": "1 tsp pure orange extract",
    //                 "originalName": "pure orange extract",
    //                 "amount": 1.0,
    //                 "unit": "tsp",
    //                 "meta": [
    //                     "pure"
    //                 ],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 1.0,
    //                         "unitShort": "tsp",
    //                         "unitLong": "teaspoon"
    //                     },
    //                     "metric": {
    //                         "amount": 1.0,
    //                         "unitShort": "tsp",
    //                         "unitLong": "teaspoon"
    //                     }
    //                 }
    //             },
    //             {
    //                 "id": 9216,
    //                 "aisle": "Produce",
    //                 "image": "orange-zest.png",
    //                 "consistency": "SOLID",
    //                 "name": "orange zest",
    //                 "nameClean": "orange zest",
    //                 "original": "1 Tbsp. Orange Zest",
    //                 "originalName": "Orange Zest",
    //                 "amount": 1.0,
    //                 "unit": "Tbsp",
    //                 "meta": [],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 1.0,
    //                         "unitShort": "Tbsp",
    //                         "unitLong": "Tbsp"
    //                     },
    //                     "metric": {
    //                         "amount": 1.0,
    //                         "unitShort": "Tbsp",
    //                         "unitLong": "Tbsp"
    //                     }
    //                 }
    //             },
    //             {
    //                 "id": 2047,
    //                 "aisle": "Spices and Seasonings",
    //                 "image": "salt.jpg",
    //                 "consistency": "SOLID",
    //                 "name": "salt",
    //                 "nameClean": "table salt",
    //                 "original": "1/2 teaspoon Salt",
    //                 "originalName": "Salt",
    //                 "amount": 0.5,
    //                 "unit": "teaspoon",
    //                 "meta": [],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 0.5,
    //                         "unitShort": "tsps",
    //                         "unitLong": "teaspoons"
    //                     },
    //                     "metric": {
    //                         "amount": 0.5,
    //                         "unitShort": "tsps",
    //                         "unitLong": "teaspoons"
    //                     }
    //                 }
    //             },
    //             {
    //                 "id": 19335,
    //                 "aisle": "Baking",
    //                 "image": "sugar-in-bowl.png",
    //                 "consistency": "SOLID",
    //                 "name": "sugar",
    //                 "nameClean": "sugar",
    //                 "original": "1/2 cup Sugar",
    //                 "originalName": "Sugar",
    //                 "amount": 0.5,
    //                 "unit": "cup",
    //                 "meta": [],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 0.5,
    //                         "unitShort": "cups",
    //                         "unitLong": "cups"
    //                     },
    //                     "metric": {
    //                         "amount": 100.0,
    //                         "unitShort": "g",
    //                         "unitLong": "grams"
    //                     }
    //                 }
    //             },
    //             {
    //                 "id": 9019,
    //                 "aisle": "Canned and Jarred",
    //                 "image": "applesauce.png",
    //                 "consistency": "SOLID",
    //                 "name": "applesauce",
    //                 "nameClean": "applesauce",
    //                 "original": "1/2 cup unsweetened applesauce",
    //                 "originalName": "unsweetened applesauce",
    //                 "amount": 0.5,
    //                 "unit": "cup",
    //                 "meta": [
    //                     "unsweetened"
    //                 ],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 0.5,
    //                         "unitShort": "cups",
    //                         "unitLong": "cups"
    //                     },
    //                     "metric": {
    //                         "amount": 122.0,
    //                         "unitShort": "ml",
    //                         "unitLong": "milliliters"
    //                     }
    //                 }
    //             },
    //             {
    //                 "id": 2050,
    //                 "aisle": "Baking",
    //                 "image": "vanilla-extract.jpg",
    //                 "consistency": "LIQUID",
    //                 "name": "vanilla extract",
    //                 "nameClean": "vanilla extract",
    //                 "original": "1 teaspoon Vanilla Extract",
    //                 "originalName": "Vanilla Extract",
    //                 "amount": 1.0,
    //                 "unit": "teaspoon",
    //                 "meta": [],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 1.0,
    //                         "unitShort": "tsp",
    //                         "unitLong": "teaspoon"
    //                     },
    //                     "metric": {
    //                         "amount": 1.0,
    //                         "unitShort": "tsp",
    //                         "unitLong": "teaspoon"
    //                     }
    //                 }
    //             },
    //             {
    //                 "id": 20080,
    //                 "aisle": "Baking",
    //                 "image": "flour.png",
    //                 "consistency": "SOLID",
    //                 "name": "flour",
    //                 "nameClean": "whole wheat flour",
    //                 "original": "1/2 cup whole wheat flour",
    //                 "originalName": "whole wheat flour",
    //                 "amount": 0.5,
    //                 "unit": "cup",
    //                 "meta": [
    //                     "whole wheat"
    //                 ],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 0.5,
    //                         "unitShort": "cups",
    //                         "unitLong": "cups"
    //                     },
    //                     "metric": {
    //                         "amount": 60.0,
    //                         "unitShort": "g",
    //                         "unitLong": "grams"
    //                     }
    //                 }
    //             }
    //         ],
    //         "id": 640389,
    //         "title": "Cranberry Orange Banana Bread",
    //         "readyInMinutes": 75,
    //         "servings": 18,
    //         "sourceUrl": "http://www.foodista.com/recipe/NF8TZYG4/cranberry-orange-banana-bread",
    //         "image": "https://spoonacular.com/recipeImages/640389-556x370.jpg",
    //         "imageType": "jpg",
    //         "summary": "Cranberry Orange Banana Bread might be just the breakfast you are searching for. One serving contains <b>102 calories</b>, <b>2g of protein</b>, and <b>1g of fat</b>. This recipe serves 18. For <b>19 cents per serving</b>, this recipe <b>covers 4%</b> of your daily requirements of vitamins and minerals. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately <b>1 hour and 15 minutes</b>. It is a good option if you're following a <b>dairy free and lacto ovo vegetarian</b> diet. 13 people found this recipe to be yummy and satisfying. A mixture of flour, vanillan extract, sugar, and a handful of other ingredients are all it takes to make this recipe so flavorful. All things considered, we decided this recipe <b>deserves a spoonacular score of 32%</b>. This score is not so super. Similar recipes include <a href=\"https://spoonacular.com/recipes/cranberry-orange-banana-bread-1789943\">Cranberry Orange Banana Bread</a>, <a href=\"https://spoonacular.com/recipes/cranberry-banana-tea-bread-with-orange-glaze-588394\">Cranberry banana tea bread with orange glaze</a>, and <a href=\"https://spoonacular.com/recipes/cranberry-orange-bread-with-a-light-orange-glaze-620089\">Cranberry Orange Bread with a Light Orange Glaze</a>.",
    //         "cuisines": [],
    //         "dishTypes": [
    //             "morning meal",
    //             "dessert",
    //             "brunch",
    //             "breakfast"
    //         ],
    //         "diets": [
    //             "dairy free",
    //             "lacto ovo vegetarian"
    //         ],
    //         "occasions": [],
    //         "instructions": "<ol><li>Mix together dry ingredients until well combined.</li><li>In a separate bowl, mix eggs, applesauce, vanilla extract, orange extract, orange zest and mashed bananas.</li><li>Stir banana mixture into flour mixture, and then add cranberries.</li><li>Stir carefully</li><li>Bake in a greased loaf pan or (3 mini pans for 30 minutes) for approximately one hour at 350F.</li><li>Bread is done when a toothpick comes out clean.</li></ol>",
    //         "analyzedInstructions": [
    //             {
    //                 "name": "",
    //                 "steps": [
    //                     {
    //                         "number": 1,
    //                         "step": "Mix together dry ingredients until well combined.In a separate bowl, mix eggs, applesauce, vanilla extract, orange extract, orange zest and mashed bananas.Stir banana mixture into flour mixture, and then add cranberries.Stir carefully",
    //                         "ingredients": [
    //                             {
    //                                 "id": 2050,
    //                                 "name": "vanilla extract",
    //                                 "localizedName": "vanilla extract",
    //                                 "image": "vanilla-extract.jpg"
    //                             },
    //                             {
    //                                 "id": 1009040,
    //                                 "name": "mashed banana",
    //                                 "localizedName": "mashed banana",
    //                                 "image": "bananas.jpg"
    //                             },
    //                             {
    //                                 "id": 12511111,
    //                                 "name": "orange extract",
    //                                 "localizedName": "orange extract",
    //                                 "image": "extract.png"
    //                             },
    //                             {
    //                                 "id": 9078,
    //                                 "name": "cranberries",
    //                                 "localizedName": "cranberries",
    //                                 "image": "cranberries.jpg"
    //                             },
    //                             {
    //                                 "id": 9216,
    //                                 "name": "orange zest",
    //                                 "localizedName": "orange zest",
    //                                 "image": "orange-zest.png"
    //                             },
    //                             {
    //                                 "id": 9019,
    //                                 "name": "applesauce",
    //                                 "localizedName": "applesauce",
    //                                 "image": "applesauce.png"
    //                             },
    //                             {
    //                                 "id": 9040,
    //                                 "name": "banana",
    //                                 "localizedName": "banana",
    //                                 "image": "bananas.jpg"
    //                             },
    //                             {
    //                                 "id": 20081,
    //                                 "name": "all purpose flour",
    //                                 "localizedName": "all purpose flour",
    //                                 "image": "flour.png"
    //                             },
    //                             {
    //                                 "id": 1123,
    //                                 "name": "egg",
    //                                 "localizedName": "egg",
    //                                 "image": "egg.png"
    //                             }
    //                         ],
    //                         "equipment": [
    //                             {
    //                                 "id": 404783,
    //                                 "name": "bowl",
    //                                 "localizedName": "bowl",
    //                                 "image": "bowl.jpg"
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "number": 2,
    //                         "step": "Bake in a greased loaf pan or (3 mini pans for 30 minutes) for approximately one hour at 350F.Bread is done when a toothpick comes out clean.",
    //                         "ingredients": [
    //                             {
    //                                 "id": 18064,
    //                                 "name": "bread",
    //                                 "localizedName": "bread",
    //                                 "image": "white-bread.jpg"
    //                             }
    //                         ],
    //                         "equipment": [
    //                             {
    //                                 "id": 404644,
    //                                 "name": "toothpicks",
    //                                 "localizedName": "toothpicks",
    //                                 "image": "toothpicks.jpg"
    //                             },
    //                             {
    //                                 "id": 404784,
    //                                 "name": "oven",
    //                                 "localizedName": "oven",
    //                                 "image": "oven.jpg",
    //                                 "temperature": {
    //                                     "number": 350.0,
    //                                     "unit": "Fahrenheit"
    //                                 }
    //                             },
    //                             {
    //                                 "id": 404715,
    //                                 "name": "loaf pan",
    //                                 "localizedName": "loaf pan",
    //                                 "image": "loaf-pan.png"
    //                             }
    //                         ],
    //                         "length": {
    //                             "number": 90,
    //                             "unit": "minutes"
    //                         }
    //                     }
    //                 ]
    //             }
    //         ],
    //         "originalId": null,
    //         "spoonacularSourceUrl": "https://spoonacular.com/cranberry-orange-banana-bread-640389"
    //     },
    //     {
    //         "isFavorite": false,

    //         "vegetarian": true,
    //         "vegan": true,
    //         "glutenFree": false,
    //         "dairyFree": true,
    //         "veryHealthy": false,
    //         "cheap": false,
    //         "veryPopular": false,
    //         "sustainable": false,
    //         "lowFodmap": false,
    //         "weightWatcherSmartPoints": 12,
    //         "gaps": "no",
    //         "preparationMinutes": -1,
    //         "cookingMinutes": -1,
    //         "aggregateLikes": 20,
    //         "healthScore": 1,
    //         "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
    //         "license": "CC BY 3.0",
    //         "sourceName": "Foodista",
    //         "pricePerServing": 81.11,
    //         "extendedIngredients": [
    //             {
    //                 "id": 10012104,
    //                 "aisle": "Produce",
    //                 "image": "coconut.jpg",
    //                 "consistency": "SOLID",
    //                 "name": "coconut meat",
    //                 "nameClean": "coconut meat",
    //                 "original": "1 cup fresh or frozen coconut meat",
    //                 "originalName": "fresh or frozen coconut meat",
    //                 "amount": 1.0,
    //                 "unit": "cup",
    //                 "meta": [
    //                     "fresh"
    //                 ],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 1.0,
    //                         "unitShort": "cup",
    //                         "unitLong": "cup"
    //                     },
    //                     "metric": {
    //                         "amount": 80.0,
    //                         "unitShort": "ml",
    //                         "unitLong": "milliliters"
    //                     }
    //                 }
    //             },
    //             {
    //                 "id": 9152,
    //                 "aisle": "Produce",
    //                 "image": "lemon-juice.jpg",
    //                 "consistency": "LIQUID",
    //                 "name": "lemon juice",
    //                 "nameClean": "lemon juice",
    //                 "original": "1 tablespoon lemon juice",
    //                 "originalName": "lemon juice",
    //                 "amount": 1.0,
    //                 "unit": "tablespoon",
    //                 "meta": [],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 1.0,
    //                         "unitShort": "Tbsp",
    //                         "unitLong": "Tbsp"
    //                     },
    //                     "metric": {
    //                         "amount": 1.0,
    //                         "unitShort": "Tbsp",
    //                         "unitLong": "Tbsp"
    //                     }
    //                 }
    //             },
    //             {
    //                 "id": 4047,
    //                 "aisle": "Baking",
    //                 "image": "oil-coconut.jpg",
    //                 "consistency": "LIQUID",
    //                 "name": "coconut oil",
    //                 "nameClean": "coconut oil",
    //                 "original": "1 tablespoon coconut oil",
    //                 "originalName": "coconut oil",
    //                 "amount": 1.0,
    //                 "unit": "tablespoon",
    //                 "meta": [],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 1.0,
    //                         "unitShort": "Tbsp",
    //                         "unitLong": "Tbsp"
    //                     },
    //                     "metric": {
    //                         "amount": 1.0,
    //                         "unitShort": "Tbsp",
    //                         "unitLong": "Tbsp"
    //                     }
    //                 }
    //             },
    //             {
    //                 "id": 99009,
    //                 "aisle": "Canned and Jarred",
    //                 "image": "coconut-milk.jpg",
    //                 "consistency": "LIQUID",
    //                 "name": "coconut milk",
    //                 "nameClean": "light coconut milk",
    //                 "original": "1 cup light coconut milk",
    //                 "originalName": "light coconut milk",
    //                 "amount": 1.0,
    //                 "unit": "cup",
    //                 "meta": [
    //                     "light"
    //                 ],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 1.0,
    //                         "unitShort": "cup",
    //                         "unitLong": "cup"
    //                     },
    //                     "metric": {
    //                         "amount": 200.0,
    //                         "unitShort": "ml",
    //                         "unitLong": "milliliters"
    //                     }
    //                 }
    //             },
    //             {
    //                 "id": 9040,
    //                 "aisle": "Produce",
    //                 "image": "bananas.jpg",
    //                 "consistency": "SOLID",
    //                 "name": "banana",
    //                 "nameClean": "banana",
    //                 "original": "1 ripe frozen banana",
    //                 "originalName": "ripe frozen banana",
    //                 "amount": 1.0,
    //                 "unit": "",
    //                 "meta": [
    //                     "frozen",
    //                     "ripe"
    //                 ],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 1.0,
    //                         "unitShort": "",
    //                         "unitLong": ""
    //                     },
    //                     "metric": {
    //                         "amount": 1.0,
    //                         "unitShort": "",
    //                         "unitLong": ""
    //                     }
    //                 }
    //             },
    //             {
    //                 "id": 2050,
    //                 "aisle": "Baking",
    //                 "image": "vanilla-extract.jpg",
    //                 "consistency": "LIQUID",
    //                 "name": "vanilla extract",
    //                 "nameClean": "vanilla extract",
    //                 "original": "1 teaspoon pure vanilla extract",
    //                 "originalName": "pure vanilla extract",
    //                 "amount": 1.0,
    //                 "unit": "teaspoon",
    //                 "meta": [
    //                     "pure"
    //                 ],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 1.0,
    //                         "unitShort": "tsp",
    //                         "unitLong": "teaspoon"
    //                     },
    //                     "metric": {
    //                         "amount": 1.0,
    //                         "unitShort": "tsp",
    //                         "unitLong": "teaspoon"
    //                     }
    //                 }
    //             },
    //             {
    //                 "id": 10018617,
    //                 "aisle": "Baking",
    //                 "image": "graham-crackers.jpg",
    //                 "consistency": "SOLID",
    //                 "name": "graham cracker crumbs",
    //                 "nameClean": "graham cracker crumbs",
    //                 "original": "2 tablespoons graham cracker crumbs (check label to ensure it is vegan)",
    //                 "originalName": "graham cracker crumbs (check label to ensure it is vegan)",
    //                 "amount": 2.0,
    //                 "unit": "tablespoons",
    //                 "meta": [
    //                     "(check label to ensure it is vegan)"
    //                 ],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 2.0,
    //                         "unitShort": "Tbsps",
    //                         "unitLong": "Tbsps"
    //                     },
    //                     "metric": {
    //                         "amount": 2.0,
    //                         "unitShort": "Tbsps",
    //                         "unitLong": "Tbsps"
    //                     }
    //                 }
    //             },
    //             {
    //                 "id": 12108,
    //                 "aisle": "Baking",
    //                 "image": "shredded-coconut.jpg",
    //                 "consistency": "SOLID",
    //                 "name": "coconut flakes",
    //                 "nameClean": "unsweetened coconut",
    //                 "original": "1 tablespoon toasted coconut flakes",
    //                 "originalName": "toasted coconut flakes",
    //                 "amount": 1.0,
    //                 "unit": "tablespoon",
    //                 "meta": [
    //                     "toasted"
    //                 ],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 1.0,
    //                         "unitShort": "Tbsp",
    //                         "unitLong": "Tbsp"
    //                     },
    //                     "metric": {
    //                         "amount": 1.0,
    //                         "unitShort": "Tbsp",
    //                         "unitLong": "Tbsp"
    //                     }
    //                 }
    //             },
    //             {
    //                 "id": 12108,
    //                 "aisle": "Baking",
    //                 "image": "coconut-flakes.png",
    //                 "consistency": "SOLID",
    //                 "name": "coconut flakes",
    //                 "nameClean": "unsweetened coconut",
    //                 "original": "1 tablespoon toasted coconut flakes",
    //                 "originalName": "toasted coconut flakes",
    //                 "amount": 1.0,
    //                 "unit": "tablespoon",
    //                 "meta": [
    //                     "toasted"
    //                 ],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 1.0,
    //                         "unitShort": "Tbsp",
    //                         "unitLong": "Tbsp"
    //                     },
    //                     "metric": {
    //                         "amount": 1.0,
    //                         "unitShort": "Tbsp",
    //                         "unitLong": "Tbsp"
    //                     }
    //                 }
    //             },
    //             {
    //                 "id": 10014412,
    //                 "aisle": "Frozen",
    //                 "image": "ice-cubes.png",
    //                 "consistency": "SOLID",
    //                 "name": "ice cubes",
    //                 "nameClean": "ice",
    //                 "original": "ice cubes",
    //                 "originalName": "ice cubes",
    //                 "amount": 3.0,
    //                 "unit": "servings",
    //                 "meta": [],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 3.0,
    //                         "unitShort": "servings",
    //                         "unitLong": "servings"
    //                     },
    //                     "metric": {
    //                         "amount": 3.0,
    //                         "unitShort": "servings",
    //                         "unitLong": "servings"
    //                     }
    //                 }
    //             }
    //         ],
    //         "id": 639749,
    //         "title": "Coconut Cream Pie Vegan Milkshake",
    //         "readyInMinutes": 45,
    //         "servings": 3,
    //         "sourceUrl": "https://www.foodista.com/recipe/LF26X6K8/coconut-cream-pie-vegan-milkshake",
    //         "image": "https://spoonacular.com/recipeImages/639749-556x370.jpg",
    //         "imageType": "jpg",
    //         "summary": "Coconut Cream Pie Vegan Milkshake might be just the beverage you are searching for. This recipe makes 3 servings with <b>268 calories</b>, <b>2g of protein</b>, and <b>20g of fat</b> each. For <b>81 cents per serving</b>, this recipe <b>covers 5%</b> of your daily requirements of vitamins and minerals. 20 people have made this recipe and would make it again. From preparation to the plate, this recipe takes around <b>45 minutes</b>. Head to the store and pick up coconut milk, banana, coconut oil, and a few other things to make it today. It is a good option if you're following a <b>dairy free, lacto ovo vegetarian, and vegan</b> diet. It is brought to you by Foodista. Overall, this recipe earns a <b>rather bad spoonacular score of 25%</b>. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/the-best-vegan-coconut-cream-pie-1734675\">The Best Vegan Coconut Cream Pie</a>, <a href=\"https://spoonacular.com/recipes/vegan-chocolate-coconut-cream-pie-485486\">Vegan Chocolate Coconut Cream Pie</a>, and <a href=\"https://spoonacular.com/recipes/easy-vegan-coconut-cream-pie-1662527\">Easy Vegan Coconut Cream Pie</a>.",
    //         "cuisines": [],
    //         "dishTypes": [
    //             "beverage",
    //             "drink"
    //         ],
    //         "diets": [
    //             "dairy free",
    //             "lacto ovo vegetarian",
    //             "vegan"
    //         ],
    //         "occasions": [],
    //         "instructions": "Combine coconut meat, lemon juice, coconut oil, coconut milk, banana, vanilla, agave nectar (optional) and graham cracker crumbs in a blender; pulse until smooth.\nTop with soy or dairy based whip cream, sprinkle with additional graham crackers and garnish with toasted coconut flakes.\nServes 2-3",
    //         "analyzedInstructions": [
    //             {
    //                 "name": "",
    //                 "steps": [
    //                     {
    //                         "number": 1,
    //                         "step": "Combine coconut meat, lemon juice, coconut oil, coconut milk, banana, vanilla, agave nectar (optional) and graham cracker crumbs in a blender; pulse until smooth.",
    //                         "ingredients": [
    //                             {
    //                                 "id": 10018617,
    //                                 "name": "graham cracker crumbs",
    //                                 "localizedName": "graham cracker crumbs",
    //                                 "image": "graham-crackers.jpg"
    //                             },
    //                             {
    //                                 "id": 19912,
    //                                 "name": "agave",
    //                                 "localizedName": "agave",
    //                                 "image": "agave.png"
    //                             },
    //                             {
    //                                 "id": 10012104,
    //                                 "name": "coconut meat",
    //                                 "localizedName": "coconut meat",
    //                                 "image": "coconut.jpg"
    //                             },
    //                             {
    //                                 "id": 12118,
    //                                 "name": "coconut milk",
    //                                 "localizedName": "coconut milk",
    //                                 "image": "coconut-milk.png"
    //                             },
    //                             {
    //                                 "id": 4047,
    //                                 "name": "coconut oil",
    //                                 "localizedName": "coconut oil",
    //                                 "image": "oil-coconut.jpg"
    //                             },
    //                             {
    //                                 "id": 9152,
    //                                 "name": "lemon juice",
    //                                 "localizedName": "lemon juice",
    //                                 "image": "lemon-juice.jpg"
    //                             },
    //                             {
    //                                 "id": 1052050,
    //                                 "name": "vanilla",
    //                                 "localizedName": "vanilla",
    //                                 "image": "vanilla.jpg"
    //                             },
    //                             {
    //                                 "id": 9040,
    //                                 "name": "banana",
    //                                 "localizedName": "banana",
    //                                 "image": "bananas.jpg"
    //                             }
    //                         ],
    //                         "equipment": [
    //                             {
    //                                 "id": 404726,
    //                                 "name": "blender",
    //                                 "localizedName": "blender",
    //                                 "image": "blender.png"
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "number": 2,
    //                         "step": "Top with soy or dairy based whip cream, sprinkle with additional graham crackers and garnish with toasted coconut flakes.",
    //                         "ingredients": [
    //                             {
    //                                 "id": 18617,
    //                                 "name": "graham crackers",
    //                                 "localizedName": "graham crackers",
    //                                 "image": "graham-crackers.jpg"
    //                             },
    //                             {
    //                                 "id": 12108,
    //                                 "name": "coconut flakes",
    //                                 "localizedName": "coconut flakes",
    //                                 "image": "coconut-flakes.png"
    //                             },
    //                             {
    //                                 "id": 1053,
    //                                 "name": "cream",
    //                                 "localizedName": "cream",
    //                                 "image": "fluid-cream.jpg"
    //                             }
    //                         ],
    //                         "equipment": []
    //                     },
    //                     {
    //                         "number": 3,
    //                         "step": "Serves 2-3",
    //                         "ingredients": [],
    //                         "equipment": []
    //                     }
    //                 ]
    //             }
    //         ],
    //         "originalId": null,
    //         "spoonacularSourceUrl": "https://spoonacular.com/coconut-cream-pie-vegan-milkshake-639749"
    //     },
    //     {
    //         "isFavorite": false,

    //         "vegetarian": false,
    //         "vegan": false,
    //         "glutenFree": false,
    //         "dairyFree": false,
    //         "veryHealthy": false,
    //         "cheap": false,
    //         "veryPopular": false,
    //         "sustainable": false,
    //         "lowFodmap": false,
    //         "weightWatcherSmartPoints": 9,
    //         "gaps": "no",
    //         "preparationMinutes": -1,
    //         "cookingMinutes": -1,
    //         "aggregateLikes": 3,
    //         "healthScore": 1,
    //         "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
    //         "license": "CC BY 3.0",
    //         "sourceName": "Foodista",
    //         "pricePerServing": 32.63,
    //         "extendedIngredients": [
    //             {
    //                 "id": 18369,
    //                 "aisle": "Baking",
    //                 "image": "white-powder.jpg",
    //                 "consistency": "SOLID",
    //                 "name": "baking powder",
    //                 "nameClean": "baking powder",
    //                 "original": "1 tablespoon baking powder",
    //                 "originalName": "baking powder",
    //                 "amount": 1.0,
    //                 "unit": "tablespoon",
    //                 "meta": [],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 1.0,
    //                         "unitShort": "Tbsp",
    //                         "unitLong": "Tbsp"
    //                     },
    //                     "metric": {
    //                         "amount": 1.0,
    //                         "unitShort": "Tbsp",
    //                         "unitLong": "Tbsp"
    //                     }
    //                 }
    //             },
    //             {
    //                 "id": 9040,
    //                 "aisle": "Produce",
    //                 "image": "bananas.jpg",
    //                 "consistency": "SOLID",
    //                 "name": "banana",
    //                 "nameClean": "banana",
    //                 "original": "2 Large ripe banana",
    //                 "originalName": "Large ripe banana",
    //                 "amount": 2.0,
    //                 "unit": "",
    //                 "meta": [
    //                     "ripe"
    //                 ],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 2.0,
    //                         "unitShort": "",
    //                         "unitLong": ""
    //                     },
    //                     "metric": {
    //                         "amount": 2.0,
    //                         "unitShort": "",
    //                         "unitLong": ""
    //                     }
    //                 }
    //             },
    //             {
    //                 "id": 2010,
    //                 "aisle": "Spices and Seasonings",
    //                 "image": "cinnamon.jpg",
    //                 "consistency": "SOLID",
    //                 "name": "cinnamon",
    //                 "nameClean": "cinnamon",
    //                 "original": "1/4 teaspoon cinnamon",
    //                 "originalName": "cinnamon",
    //                 "amount": 0.25,
    //                 "unit": "teaspoon",
    //                 "meta": [],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 0.25,
    //                         "unitShort": "tsps",
    //                         "unitLong": "teaspoons"
    //                     },
    //                     "metric": {
    //                         "amount": 0.25,
    //                         "unitShort": "tsps",
    //                         "unitLong": "teaspoons"
    //                     }
    //                 }
    //             },
    //             {
    //                 "id": 1123,
    //                 "aisle": "Milk, Eggs, Other Dairy",
    //                 "image": "egg.png",
    //                 "consistency": "SOLID",
    //                 "name": "egg",
    //                 "nameClean": "egg",
    //                 "original": "1 large egg",
    //                 "originalName": "egg",
    //                 "amount": 1.0,
    //                 "unit": "large",
    //                 "meta": [],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 1.0,
    //                         "unitShort": "large",
    //                         "unitLong": "large"
    //                     },
    //                     "metric": {
    //                         "amount": 1.0,
    //                         "unitShort": "large",
    //                         "unitLong": "large"
    //                     }
    //                 }
    //             },
    //             {
    //                 "id": 1118,
    //                 "aisle": "Milk, Eggs, Other Dairy",
    //                 "image": "plain-yogurt.jpg",
    //                 "consistency": "LIQUID",
    //                 "name": "yogurt",
    //                 "nameClean": "fat free yogurt",
    //                 "original": "1/2 cup plain fat free yogurt",
    //                 "originalName": "plain fat free yogurt",
    //                 "amount": 0.5,
    //                 "unit": "cup",
    //                 "meta": [
    //                     "plain",
    //                     "fat free"
    //                 ],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 0.5,
    //                         "unitShort": "cups",
    //                         "unitLong": "cups"
    //                     },
    //                     "metric": {
    //                         "amount": 122.5,
    //                         "unitShort": "ml",
    //                         "unitLong": "milliliters"
    //                     }
    //                 }
    //             },
    //             {
    //                 "id": 1118,
    //                 "aisle": "Milk, Eggs, Other Dairy",
    //                 "image": "white-cream.png",
    //                 "consistency": "LIQUID",
    //                 "name": "yogurt",
    //                 "nameClean": "fat free yogurt",
    //                 "original": "1/2 cup plain fat free yogurt",
    //                 "originalName": "plain fat free yogurt",
    //                 "amount": 0.5,
    //                 "unit": "cup",
    //                 "meta": [
    //                     "plain",
    //                     "fat free"
    //                 ],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 0.5,
    //                         "unitShort": "cups",
    //                         "unitLong": "cups"
    //                     },
    //                     "metric": {
    //                         "amount": 122.5,
    //                         "unitShort": "ml",
    //                         "unitLong": "milliliters"
    //                     }
    //                 }
    //             },
    //             {
    //                 "id": 20081,
    //                 "aisle": "Baking",
    //                 "image": "flour.png",
    //                 "consistency": "SOLID",
    //                 "name": "flour",
    //                 "nameClean": "wheat flour",
    //                 "original": "2 1/2 cups all-purpose flour",
    //                 "originalName": "all-purpose flour",
    //                 "amount": 2.5,
    //                 "unit": "cups",
    //                 "meta": [
    //                     "all-purpose"
    //                 ],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 2.5,
    //                         "unitShort": "cups",
    //                         "unitLong": "cups"
    //                     },
    //                     "metric": {
    //                         "amount": 312.5,
    //                         "unitShort": "g",
    //                         "unitLong": "grams"
    //                     }
    //                 }
    //             },
    //             {
    //                 "id": 19334,
    //                 "aisle": "Baking",
    //                 "image": "light-brown-sugar.jpg",
    //                 "consistency": "SOLID",
    //                 "name": "golden brown sugar",
    //                 "nameClean": "golden brown sugar",
    //                 "original": "1/2 cup packed, golden brown sugar",
    //                 "originalName": "packed, golden brown sugar",
    //                 "amount": 0.5,
    //                 "unit": "cup",
    //                 "meta": [
    //                     "packed"
    //                 ],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 0.5,
    //                         "unitShort": "cups",
    //                         "unitLong": "cups"
    //                     },
    //                     "metric": {
    //                         "amount": 110.0,
    //                         "unitShort": "g",
    //                         "unitLong": "grams"
    //                     }
    //                 }
    //             },
    //             {
    //                 "id": 19334,
    //                 "aisle": "Baking",
    //                 "image": "dark-brown-sugar.png",
    //                 "consistency": "SOLID",
    //                 "name": "golden brown sugar",
    //                 "nameClean": "golden brown sugar",
    //                 "original": "1/2 cup packed, golden brown sugar",
    //                 "originalName": "packed, golden brown sugar",
    //                 "amount": 0.5,
    //                 "unit": "cup",
    //                 "meta": [
    //                     "packed"
    //                 ],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 0.5,
    //                         "unitShort": "cups",
    //                         "unitLong": "cups"
    //                     },
    //                     "metric": {
    //                         "amount": 110.0,
    //                         "unitShort": "g",
    //                         "unitLong": "grams"
    //                     }
    //                 }
    //             },
    //             {
    //                 "id": 2047,
    //                 "aisle": "Spices and Seasonings",
    //                 "image": "salt.jpg",
    //                 "consistency": "SOLID",
    //                 "name": "salt",
    //                 "nameClean": "table salt",
    //                 "original": "3/4 teaspoon salt",
    //                 "originalName": "salt",
    //                 "amount": 0.75,
    //                 "unit": "teaspoon",
    //                 "meta": [],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 0.75,
    //                         "unitShort": "tsps",
    //                         "unitLong": "teaspoons"
    //                     },
    //                     "metric": {
    //                         "amount": 0.75,
    //                         "unitShort": "tsps",
    //                         "unitLong": "teaspoons"
    //                     }
    //                 }
    //             },
    //             {
    //                 "id": 19903,
    //                 "aisle": "Sweet Snacks",
    //                 "image": "dark-chocolate-pieces.jpg",
    //                 "consistency": "SOLID",
    //                 "name": "semi-sweet chocolate chips",
    //                 "nameClean": "semisweet chocolate",
    //                 "original": "1 cup semi-sweet chocolate chips",
    //                 "originalName": "semi-sweet chocolate chips",
    //                 "amount": 1.0,
    //                 "unit": "cup",
    //                 "meta": [],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 1.0,
    //                         "unitShort": "cup",
    //                         "unitLong": "cup"
    //                     },
    //                     "metric": {
    //                         "amount": 175.0,
    //                         "unitShort": "ml",
    //                         "unitLong": "milliliters"
    //                     }
    //                 }
    //             },
    //             {
    //                 "id": 1199,
    //                 "aisle": "Milk, Eggs, Other Dairy",
    //                 "image": "fluid-cream.jpg",
    //                 "consistency": "SOLID",
    //                 "name": "skim milk",
    //                 "nameClean": "fat free half and half",
    //                 "original": "1/2 cup fat free half and half or skim milk",
    //                 "originalName": "fat free half and half or skim milk",
    //                 "amount": 0.5,
    //                 "unit": "cup",
    //                 "meta": [
    //                     "fat free"
    //                 ],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 0.5,
    //                         "unitShort": "cups",
    //                         "unitLong": "cups"
    //                     },
    //                     "metric": {
    //                         "amount": 118.0,
    //                         "unitShort": "ml",
    //                         "unitLong": "milliliters"
    //                     }
    //                 }
    //             },
    //             {
    //                 "id": 10116098,
    //                 "aisle": "Nut butters, Jams, and Honey",
    //                 "image": "peanut-butter.png",
    //                 "consistency": "SOLID",
    //                 "name": "smooth peanut butter",
    //                 "nameClean": "creamy peanut butter",
    //                 "original": "3/4 cup smooth peanut butter",
    //                 "originalName": "smooth peanut butter",
    //                 "amount": 0.75,
    //                 "unit": "cup",
    //                 "meta": [],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 0.75,
    //                         "unitShort": "cups",
    //                         "unitLong": "cups"
    //                     },
    //                     "metric": {
    //                         "amount": 193.5,
    //                         "unitShort": "g",
    //                         "unitLong": "grams"
    //                     }
    //                 }
    //             },
    //             {
    //                 "id": 19335,
    //                 "aisle": "Baking",
    //                 "image": "sugar-in-bowl.png",
    //                 "consistency": "SOLID",
    //                 "name": "sugar",
    //                 "nameClean": "sugar",
    //                 "original": "Sugar",
    //                 "originalName": "Sugar",
    //                 "amount": 24.0,
    //                 "unit": "servings",
    //                 "meta": [],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 24.0,
    //                         "unitShort": "servings",
    //                         "unitLong": "servings"
    //                     },
    //                     "metric": {
    //                         "amount": 24.0,
    //                         "unitShort": "servings",
    //                         "unitLong": "servings"
    //                     }
    //                 }
    //             },
    //             {
    //                 "id": 2050,
    //                 "aisle": "Baking",
    //                 "image": "vanilla-extract.jpg",
    //                 "consistency": "LIQUID",
    //                 "name": "vanilla extract",
    //                 "nameClean": "vanilla extract",
    //                 "original": "1 teaspoon vanilla extract",
    //                 "originalName": "vanilla extract",
    //                 "amount": 1.0,
    //                 "unit": "teaspoon",
    //                 "meta": [],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 1.0,
    //                         "unitShort": "tsp",
    //                         "unitLong": "teaspoon"
    //                     },
    //                     "metric": {
    //                         "amount": 1.0,
    //                         "unitShort": "tsp",
    //                         "unitLong": "teaspoon"
    //                     }
    //                 }
    //             },
    //             {
    //                 "id": 4669,
    //                 "aisle": "Oil, Vinegar, Salad Dressing",
    //                 "image": "vegetable-oil.jpg",
    //                 "consistency": "LIQUID",
    //                 "name": "vegetable oil",
    //                 "nameClean": "vegetable oil",
    //                 "original": "3 tablespoons vegetable oil",
    //                 "originalName": "vegetable oil",
    //                 "amount": 3.0,
    //                 "unit": "tablespoons",
    //                 "meta": [],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 3.0,
    //                         "unitShort": "Tbsps",
    //                         "unitLong": "Tbsps"
    //                     },
    //                     "metric": {
    //                         "amount": 3.0,
    //                         "unitShort": "Tbsps",
    //                         "unitLong": "Tbsps"
    //                     }
    //                 }
    //             }
    //         ],
    //         "id": 655046,
    //         "title": "Pb, Banana, Chocolate Chip Muffins",
    //         "readyInMinutes": 45,
    //         "servings": 24,
    //         "sourceUrl": "http://www.foodista.com/recipe/LWM6RFFT/pb-banana-chocolate-chip-muffins",
    //         "image": "https://spoonacular.com/recipeImages/655046-556x370.jpg",
    //         "imageType": "jpg",
    //         "summary": "Pb, Banana, Chocolate Chip Muffins takes around <b>45 minutes</b> from beginning to end. For <b>33 cents per serving</b>, you get a breakfast that serves 24. One serving contains <b>235 calories</b>, <b>4g of protein</b>, and <b>9g of fat</b>. A mixture of semi-sweet chocolate chips, sugar, cinnamon, and a handful of other ingredients are all it takes to make this recipe so yummy. 3 people have tried and liked this recipe. It is brought to you by Foodista. Taking all factors into account, this recipe <b>earns a spoonacular score of 27%</b>, which is not so awesome. Similar recipes include <a href=\"https://spoonacular.com/recipes/chocolate-chip-banana-muffins-1774157\">Chocolate Chip Banana Muffins</a>, <a href=\"https://spoonacular.com/recipes/chocolate-chip-banana-muffins-579334\">Chocolate Chip Banana Muffins</a>, and <a href=\"https://spoonacular.com/recipes/chocolate-chip-banana-muffins-671569\">Chocolate Chip Banana Muffins</a>.",
    //         "cuisines": [],
    //         "dishTypes": [
    //             "morning meal",
    //             "brunch",
    //             "breakfast"
    //         ],
    //         "diets": [],
    //         "occasions": [],
    //         "instructions": "<ol><li>Preheat oven to 350</li><li>In a large bowl sift together flour, sugar, brown sugar, baking powder, salt and cinnamon until combined. Set aside.</li><li>In a food processor combine bananas, yogurt, milk, peanut butter, egg, oil and vanilla. Pulse until it is smooth.</li><li>Pour the wet ingredients into the flour mixture and fold until just combined. Stir in chocolate chips.</li><li>Spray muffin tins with cooking spray and fill until  full. Bake on middle rack for 20-25 minutes or until a toothpick comes out clean.</li></ol>",
    //         "analyzedInstructions": [
    //             {
    //                 "name": "",
    //                 "steps": [
    //                     {
    //                         "number": 1,
    //                         "step": "Preheat oven to 350In a large bowl sift together flour, sugar, brown sugar, baking powder, salt and cinnamon until combined. Set aside.In a food processor combine bananas, yogurt, milk, peanut butter, egg, oil and vanilla. Pulse until it is smooth.",
    //                         "ingredients": [
    //                             {
    //                                 "id": 18369,
    //                                 "name": "baking powder",
    //                                 "localizedName": "baking powder",
    //                                 "image": "white-powder.jpg"
    //                             },
    //                             {
    //                                 "id": 16098,
    //                                 "name": "peanut butter",
    //                                 "localizedName": "peanut butter",
    //                                 "image": "peanut-butter.png"
    //                             },
    //                             {
    //                                 "id": 19334,
    //                                 "name": "brown sugar",
    //                                 "localizedName": "brown sugar",
    //                                 "image": "dark-brown-sugar.png"
    //                             },
    //                             {
    //                                 "id": 2010,
    //                                 "name": "cinnamon",
    //                                 "localizedName": "cinnamon",
    //                                 "image": "cinnamon.jpg"
    //                             },
    //                             {
    //                                 "id": 9040,
    //                                 "name": "banana",
    //                                 "localizedName": "banana",
    //                                 "image": "bananas.jpg"
    //                             },
    //                             {
    //                                 "id": 1052050,
    //                                 "name": "vanilla",
    //                                 "localizedName": "vanilla",
    //                                 "image": "vanilla.jpg"
    //                             },
    //                             {
    //                                 "id": 1116,
    //                                 "name": "yogurt",
    //                                 "localizedName": "yogurt",
    //                                 "image": "plain-yogurt.jpg"
    //                             },
    //                             {
    //                                 "id": 20081,
    //                                 "name": "all purpose flour",
    //                                 "localizedName": "all purpose flour",
    //                                 "image": "flour.png"
    //                             },
    //                             {
    //                                 "id": 19335,
    //                                 "name": "sugar",
    //                                 "localizedName": "sugar",
    //                                 "image": "sugar-in-bowl.png"
    //                             },
    //                             {
    //                                 "id": 1077,
    //                                 "name": "milk",
    //                                 "localizedName": "milk",
    //                                 "image": "milk.png"
    //                             },
    //                             {
    //                                 "id": 2047,
    //                                 "name": "salt",
    //                                 "localizedName": "salt",
    //                                 "image": "salt.jpg"
    //                             },
    //                             {
    //                                 "id": 1123,
    //                                 "name": "egg",
    //                                 "localizedName": "egg",
    //                                 "image": "egg.png"
    //                             },
    //                             {
    //                                 "id": 4582,
    //                                 "name": "cooking oil",
    //                                 "localizedName": "cooking oil",
    //                                 "image": "vegetable-oil.jpg"
    //                             }
    //                         ],
    //                         "equipment": [
    //                             {
    //                                 "id": 404771,
    //                                 "name": "food processor",
    //                                 "localizedName": "food processor",
    //                                 "image": "food-processor.png"
    //                             },
    //                             {
    //                                 "id": 404783,
    //                                 "name": "bowl",
    //                                 "localizedName": "bowl",
    //                                 "image": "bowl.jpg"
    //                             },
    //                             {
    //                                 "id": 404784,
    //                                 "name": "oven",
    //                                 "localizedName": "oven",
    //                                 "image": "oven.jpg"
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "number": 2,
    //                         "step": "Pour the wet ingredients into the flour mixture and fold until just combined. Stir in chocolate chips.Spray muffin tins with cooking spray and fill until  full.",
    //                         "ingredients": [
    //                             {
    //                                 "id": 99278,
    //                                 "name": "chocolate chips",
    //                                 "localizedName": "chocolate chips",
    //                                 "image": "chocolate-chips.jpg"
    //                             },
    //                             {
    //                                 "id": 4679,
    //                                 "name": "cooking spray",
    //                                 "localizedName": "cooking spray",
    //                                 "image": "cooking-spray.png"
    //                             },
    //                             {
    //                                 "id": 20081,
    //                                 "name": "all purpose flour",
    //                                 "localizedName": "all purpose flour",
    //                                 "image": "flour.png"
    //                             }
    //                         ],
    //                         "equipment": [
    //                             {
    //                                 "id": 404671,
    //                                 "name": "muffin tray",
    //                                 "localizedName": "muffin tray",
    //                                 "image": "muffin-tray.jpg"
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "number": 3,
    //                         "step": "Bake on middle rack for 20-25 minutes or until a toothpick comes out clean.",
    //                         "ingredients": [],
    //                         "equipment": [
    //                             {
    //                                 "id": 404644,
    //                                 "name": "toothpicks",
    //                                 "localizedName": "toothpicks",
    //                                 "image": "toothpicks.jpg"
    //                             },
    //                             {
    //                                 "id": 404784,
    //                                 "name": "oven",
    //                                 "localizedName": "oven",
    //                                 "image": "oven.jpg"
    //                             }
    //                         ],
    //                         "length": {
    //                             "number": 25,
    //                             "unit": "minutes"
    //                         }
    //                     }
    //                 ]
    //             }
    //         ],
    //         "originalId": null,
    //         "spoonacularSourceUrl": "https://spoonacular.com/pb-banana-chocolate-chip-muffins-655046"
    //     },
    //     {
    //         "isFavorite": false,

    //         "vegetarian": true,
    //         "vegan": true,
    //         "glutenFree": true,
    //         "dairyFree": true,
    //         "veryHealthy": false,
    //         "cheap": false,
    //         "veryPopular": false,
    //         "sustainable": false,
    //         "lowFodmap": false,
    //         "weightWatcherSmartPoints": 0,
    //         "gaps": "no",
    //         "preparationMinutes": -1,
    //         "cookingMinutes": -1,
    //         "aggregateLikes": 2,
    //         "healthScore": 10,
    //         "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
    //         "license": "CC BY 3.0",
    //         "sourceName": "Foodista",
    //         "pricePerServing": 36.9,
    //         "extendedIngredients": [
    //             {
    //                 "id": 9016,
    //                 "aisle": "Beverages",
    //                 "image": "apple-juice.jpg",
    //                 "consistency": "LIQUID",
    //                 "name": "apple juice",
    //                 "nameClean": "apple juice",
    //                 "original": "1/4 cup chilled apple juice",
    //                 "originalName": "chilled apple juice",
    //                 "amount": 0.25,
    //                 "unit": "cup",
    //                 "meta": [
    //                     "chilled"
    //                 ],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 0.25,
    //                         "unitShort": "cups",
    //                         "unitLong": "cups"
    //                     },
    //                     "metric": {
    //                         "amount": 62.0,
    //                         "unitShort": "ml",
    //                         "unitLong": "milliliters"
    //                     }
    //                 }
    //             },
    //             {
    //                 "id": 9040,
    //                 "aisle": "Produce",
    //                 "image": "bananas.jpg",
    //                 "consistency": "SOLID",
    //                 "name": "banana",
    //                 "nameClean": "banana",
    //                 "original": "1 ripe banana, frozen and cut into chunks",
    //                 "originalName": "ripe banana, frozen and cut into chunks",
    //                 "amount": 1.0,
    //                 "unit": "",
    //                 "meta": [
    //                     "frozen",
    //                     "ripe",
    //                     "cut into chunks"
    //                 ],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 1.0,
    //                         "unitShort": "",
    //                         "unitLong": ""
    //                     },
    //                     "metric": {
    //                         "amount": 1.0,
    //                         "unitShort": "",
    //                         "unitLong": ""
    //                     }
    //                 }
    //             },
    //             {
    //                 "id": 10014412,
    //                 "aisle": "Frozen",
    //                 "image": "ice-cubes.png",
    //                 "consistency": "SOLID",
    //                 "name": "ice cubes",
    //                 "nameClean": "ice",
    //                 "original": "2 ice cubes",
    //                 "originalName": "ice cubes",
    //                 "amount": 2.0,
    //                 "unit": "",
    //                 "meta": [],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 2.0,
    //                         "unitShort": "",
    //                         "unitLong": ""
    //                     },
    //                     "metric": {
    //                         "amount": 2.0,
    //                         "unitShort": "",
    //                         "unitLong": ""
    //                     }
    //                 }
    //             },
    //             {
    //                 "id": 9148,
    //                 "aisle": "Produce",
    //                 "image": "kiwi.png",
    //                 "consistency": "SOLID",
    //                 "name": "kiwi fruit",
    //                 "nameClean": "kiwi",
    //                 "original": "1 kiwi fruit, peeled and cut into pieces",
    //                 "originalName": "kiwi fruit, peeled and cut into pieces",
    //                 "amount": 1.0,
    //                 "unit": "",
    //                 "meta": [
    //                     "peeled",
    //                     "cut into pieces"
    //                 ],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 1.0,
    //                         "unitShort": "",
    //                         "unitLong": ""
    //                     },
    //                     "metric": {
    //                         "amount": 1.0,
    //                         "unitShort": "",
    //                         "unitLong": ""
    //                     }
    //                 }
    //             },
    //             {
    //                 "id": 1009326,
    //                 "aisle": "Produce",
    //                 "image": "watermelon.png",
    //                 "consistency": "SOLID",
    //                 "name": "seeded/seedless watermelon",
    //                 "nameClean": "seedless watermelon",
    //                 "original": "1 cup coarsely chopped seeded/seedless watermelon",
    //                 "originalName": "coarsely chopped seeded/seedless watermelon",
    //                 "amount": 1.0,
    //                 "unit": "cup",
    //                 "meta": [
    //                     "coarsely chopped"
    //                 ],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 1.0,
    //                         "unitShort": "cup",
    //                         "unitLong": "cup"
    //                     },
    //                     "metric": {
    //                         "amount": 152.0,
    //                         "unitShort": "g",
    //                         "unitLong": "grams"
    //                     }
    //                 }
    //             }
    //         ],
    //         "id": 665040,
    //         "title": "Watermelon, Kiwi, Apple and Frozen Banana Smoothie",
    //         "readyInMinutes": 45,
    //         "servings": 3,
    //         "sourceUrl": "http://www.foodista.com/recipe/LDFFHSFG/watermelon-kiwi-apple-and-frozen-banana-smoothie",
    //         "image": "https://spoonacular.com/recipeImages/665040-556x370.jpg",
    //         "imageType": "jpg",
    //         "summary": "Watermelon, Kiwi, Apple and Frozen Banana Smoothie could be just the <b>gluten free, dairy free, paleolithic, and lacto ovo vegetarian</b> recipe you've been looking for. This recipe serves 3 and costs 37 cents per serving. This breakfast has <b>77 calories</b>, <b>1g of protein</b>, and <b>0g of fat</b> per serving. 2 people have made this recipe and would make it again. Head to the store and pick up apple juice, seeded/seedless watermelon, ice cubes, and a few other things to make it today. It will be a hit at your <b>Summer</b> event. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 54%</b>, which is solid. Similar recipes are <a href=\"https://spoonacular.com/recipes/watermelon-kiwi-apple-and-frozen-banana-smoothie-1364161\">Watermelon, Kiwi, Apple and Frozen Banana Smoothie</a>, <a href=\"https://spoonacular.com/recipes/watermelon-kiwi-banana-smoothie-160920\">Watermelon-Kiwi-Banana Smoothie</a>, and <a href=\"https://spoonacular.com/recipes/sugar-free-watermelon-and-kiwi-ice-pops-paletas-de-sandia-y-kiwi-506516\">Sugar Free Watermelon and Kiwi Ice Pops (paletas de sandia y kiwi)</a>.",
    //         "cuisines": [],
    //         "dishTypes": [
    //             "morning meal",
    //             "brunch",
    //             "beverage",
    //             "breakfast",
    //             "drink"
    //         ],
    //         "diets": [
    //             "gluten free",
    //             "dairy free",
    //             "paleolithic",
    //             "lacto ovo vegetarian",
    //             "primal",
    //             "vegan"
    //         ],
    //         "occasions": [
    //             "summer"
    //         ],
    //         "instructions": "<ol><li>Place all ingredients in the blender and blend until smooth. Pour mixture into glass and enjoy!</li></ol>",
    //         "analyzedInstructions": [
    //             {
    //                 "name": "",
    //                 "steps": [
    //                     {
    //                         "number": 1,
    //                         "step": "Place all ingredients in the blender and blend until smooth.",
    //                         "ingredients": [],
    //                         "equipment": [
    //                             {
    //                                 "id": 404726,
    //                                 "name": "blender",
    //                                 "localizedName": "blender",
    //                                 "image": "blender.png"
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "number": 2,
    //                         "step": "Pour mixture into glass and enjoy!",
    //                         "ingredients": [],
    //                         "equipment": []
    //                     }
    //                 ]
    //             }
    //         ],
    //         "originalId": null,
    //         "spoonacularSourceUrl": "https://spoonacular.com/watermelon-kiwi-apple-and-frozen-banana-smoothie-665040"
    //     },
    //     {
    //         "isFavorite": true,

    //         "vegetarian": false,
    //         "vegan": false,
    //         "glutenFree": true,
    //         "dairyFree": true,
    //         "veryHealthy": false,
    //         "cheap": false,
    //         "veryPopular": false,
    //         "sustainable": false,
    //         "lowFodmap": true,
    //         "weightWatcherSmartPoints": 26,
    //         "gaps": "no",
    //         "preparationMinutes": -1,
    //         "cookingMinutes": -1,
    //         "aggregateLikes": 58,
    //         "healthScore": 33,
    //         "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
    //         "license": "CC BY 3.0",
    //         "sourceName": "Foodista",
    //         "pricePerServing": 144.77,
    //         "extendedIngredients": [
    //             {
    //                 "id": 10016223,
    //                 "aisle": null,
    //                 "image": "no.jpg",
    //                 "consistency": "LIQUID",
    //                 "name": "almond milk",
    //                 "nameClean": "milk substitute",
    //                 "original": "1 cup almond milk or other non-dairy milk (see my almond milk recipe)",
    //                 "originalName": "almond milk or other non-dairy milk (see my almond milk recipe)",
    //                 "amount": 1.0,
    //                 "unit": "cup",
    //                 "meta": [
    //                     "(see my almond milk recipe)"
    //                 ],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 1.0,
    //                         "unitShort": "cup",
    //                         "unitLong": "cup"
    //                     },
    //                     "metric": {
    //                         "amount": 236.0,
    //                         "unitShort": "ml",
    //                         "unitLong": "milliliters"
    //                     }
    //                 }
    //             },
    //             {
    //                 "id": 9040,
    //                 "aisle": "Produce",
    //                 "image": "bananas.jpg",
    //                 "consistency": "SOLID",
    //                 "name": "bananas",
    //                 "nameClean": "banana",
    //                 "original": "2 bananas, smashed (I used frozen)",
    //                 "originalName": "bananas, smashed (I used frozen)",
    //                 "amount": 2.0,
    //                 "unit": "",
    //                 "meta": [
    //                     "frozen",
    //                     "smashed",
    //                     "(I used )"
    //                 ],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 2.0,
    //                         "unitShort": "",
    //                         "unitLong": ""
    //                     },
    //                     "metric": {
    //                         "amount": 2.0,
    //                         "unitShort": "",
    //                         "unitLong": ""
    //                     }
    //                 }
    //             },
    //             {
    //                 "id": 16098,
    //                 "aisle": "Nut butters, Jams, and Honey",
    //                 "image": "peanut-butter.png",
    //                 "consistency": "SOLID",
    //                 "name": "peanut butter",
    //                 "nameClean": "peanut butter",
    //                 "original": "1/2 cup peanut butter",
    //                 "originalName": "peanut butter",
    //                 "amount": 0.5,
    //                 "unit": "cup",
    //                 "meta": [],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 0.5,
    //                         "unitShort": "cups",
    //                         "unitLong": "cups"
    //                     },
    //                     "metric": {
    //                         "amount": 129.0,
    //                         "unitShort": "g",
    //                         "unitLong": "grams"
    //                     }
    //                 }
    //             },
    //             {
    //                 "id": 10819297,
    //                 "aisle": "Nut butters, Jams, and Honey",
    //                 "image": "strawberry-jam.png",
    //                 "consistency": "SOLID",
    //                 "name": "strawberries",
    //                 "nameClean": "strawberry jam",
    //                 "original": "½ cup strawberries (about 3 strawberries) or 1 Tbsp strawberry jam",
    //                 "originalName": "strawberries (about 3 strawberries) or 1 Tbsp strawberry jam",
    //                 "amount": 0.5,
    //                 "unit": "cup",
    //                 "meta": [
    //                     "( 3 strawberries)"
    //                 ],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 0.5,
    //                         "unitShort": "cups",
    //                         "unitLong": "cups"
    //                     },
    //                     "metric": {
    //                         "amount": 170.0,
    //                         "unitShort": "ml",
    //                         "unitLong": "milliliters"
    //                     }
    //                 }
    //             },
    //             {
    //                 "id": 10819297,
    //                 "aisle": "Nut butters, Jams, and Honey",
    //                 "image": "strawberry-jam.png",
    //                 "consistency": "SOLID",
    //                 "name": "strawberries",
    //                 "nameClean": "strawberry jam",
    //                 "original": "½ cup strawberries (about 3 strawberries) or 1 Tbsp strawberry jam",
    //                 "originalName": "strawberries (about 3 strawberries) or 1 Tbsp strawberry jam",
    //                 "amount": 0.5,
    //                 "unit": "cup",
    //                 "meta": [
    //                     "( 3 strawberries)"
    //                 ],
    //                 "measures": {
    //                     "us": {
    //                         "amount": 0.5,
    //                         "unitShort": "cups",
    //                         "unitLong": "cups"
    //                     },
    //                     "metric": {
    //                         "amount": 170.0,
    //                         "unitShort": "ml",
    //                         "unitLong": "milliliters"
    //                     }
    //                 }
    //             }
    //         ],
    //         "id": 655235,
    //         "title": "Peanut Butter and Jelly Smoothie",
    //         "readyInMinutes": 45,
    //         "servings": 2,
    //         "sourceUrl": "http://www.foodista.com/recipe/K5KVRWVR/peanut-butter-and-jelly-smoothie",
    //         "image": "https://spoonacular.com/recipeImages/655235-556x370.jpg",
    //         "imageType": "jpg",
    //         "summary": "Peanut Butter and Jelly Smoothie might be a good recipe to expand your breakfast repertoire. Watching your figure? This gluten free, dairy free, and fodmap friendly recipe has <b>779 calories</b>, <b>20g of protein</b>, and <b>36g of fat</b> per serving. For <b>$1.45 per serving</b>, this recipe <b>covers 26%</b> of your daily requirements of vitamins and minerals. This recipe serves 2. 58 people were impressed by this recipe. This recipe from Foodista requires almond milk, bananas, peanut butter, and strawberries. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 95%</b>, which is super. Try <a href=\"https://spoonacular.com/recipes/peanut-butter-and-jelly-smoothie-609137\">Peanut Butter and Jelly Smoothie</a>, <a href=\"https://spoonacular.com/recipes/peanut-butter-and-jelly-smoothie-1419673\">Peanut Butter and Jelly Smoothie</a>, and <a href=\"https://spoonacular.com/recipes/peanut-butter-and-jelly-smoothie-1201725\">Peanut Butter and Jelly Smoothie</a> for similar recipes.",
    //         "cuisines": [],
    //         "dishTypes": [
    //             "morning meal",
    //             "brunch",
    //             "beverage",
    //             "breakfast",
    //             "drink"
    //         ],
    //         "diets": [
    //             "gluten free",
    //             "dairy free",
    //             "fodmap friendly"
    //         ],
    //         "occasions": [],
    //         "instructions": "<ol><li>Place ingredients in a high speed blender like Blendtec for super smooth texture, blend on high.</li><li>If using a regular blender put milk and strawberries in then blend.</li><li>Next, add banana pieces and peanut butter, process until smooth.</li><li>Garnish with crushed peanuts and serve.</li></ol>",
    //         "analyzedInstructions": [
    //             {
    //                 "name": "",
    //                 "steps": [
    //                     {
    //                         "number": 1,
    //                         "step": "Place ingredients in a high speed blender like Blendtec for super smooth texture, blend on high.If using a regular blender put milk and strawberries in then blend.Next, add banana pieces and peanut butter, process until smooth.",
    //                         "ingredients": [
    //                             {
    //                                 "id": 16098,
    //                                 "name": "peanut butter",
    //                                 "localizedName": "peanut butter",
    //                                 "image": "peanut-butter.png"
    //                             },
    //                             {
    //                                 "id": 9316,
    //                                 "name": "strawberries",
    //                                 "localizedName": "strawberries",
    //                                 "image": "strawberries.png"
    //                             },
    //                             {
    //                                 "id": 9040,
    //                                 "name": "banana",
    //                                 "localizedName": "banana",
    //                                 "image": "bananas.jpg"
    //                             },
    //                             {
    //                                 "id": 1077,
    //                                 "name": "milk",
    //                                 "localizedName": "milk",
    //                                 "image": "milk.png"
    //                             }
    //                         ],
    //                         "equipment": [
    //                             {
    //                                 "id": 404726,
    //                                 "name": "blender",
    //                                 "localizedName": "blender",
    //                                 "image": "blender.png"
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         "number": 2,
    //                         "step": "Garnish with crushed peanuts and serve.",
    //                         "ingredients": [
    //                             {
    //                                 "id": 16091,
    //                                 "name": "peanuts",
    //                                 "localizedName": "peanuts",
    //                                 "image": "peanuts.png"
    //                             }
    //                         ],
    //                         "equipment": []
    //                     }
    //                 ]
    //             }
    //         ],
    //         "originalId": null,
    //         "spoonacularSourceUrl": "https://spoonacular.com/peanut-butter-and-jelly-smoothie-655235"
    //     },
    // ]
  }
  

}
