import { Component, OnInit } from '@angular/core';
import { randomRecipe } from 'src/app/models/Recipe';
import { WebService } from 'src/app/services/web.service';

@Component({
  selector: 'app-random-recipe',
  templateUrl: './random-recipe.component.html',
  styleUrls: ['./random-recipe.component.css'],
})
export class RandomRecipeComponent implements OnInit{

  randomRecipes: randomRecipe[] =[]
 constructor(private webService:WebService){

 }

 ngOnInit(): void {
    //  this.webService.getRandom().subscribe((recipes) => {
    //    this.randomRecipes = recipes.recipes
    //    console.log(this.randomRecipes)
    //  })

    this.randomRecipes = [
      {
          "extendedIngredients": [
              {
                  "id": 1002030,
                  "original": "1/2 teaspoon black pepper",
              },
              {
                  "id": 10311529,
                  "original": "2 pints red grape or cherry tomatoes",
                  
              },
              {
                  "id": 6615,
                  "original": "2 3/4 cups chicken broth (vegetable broth would be fine too)",
                
              },
              {
                  "id": 1034053,
                 
                  "original": "1/4 cup Extra Virgin Olive Oil",
                 
              },
              {
                  "id": 1019,
                 
                  "original": "1/3 pound feta cheese",
                
              },
              {
                  "id": 10211297,
                
                  "original": "1/4 cup torn or chopped fresh flat leaf parsley",
                
              },
              {
                  "id": 2064,
                
                  "original": "1/4 cup fresh mint",
               
              },
          ],
          "id": 641631,
          "title": "Dragon Salad - Couscous Summer Salad",
          "image": "https://spoonacular.com/recipeImages/641631-556x370.jpg",
         "dishTypes": [
                "lunch",
                "main course",
                "main dish",
                "dinner"
            ],
          "summary": "Dragon Salad - Couscous Summer Salad is a <b>lacto ovo vegetarian</b> recipe with 6 servings. For <b>$4.04 per serving</b>, this recipe <b>covers 16%</b> of your daily requirements of vitamins and minerals. One portion of this dish contains around <b>18g of protein</b>, <b>18g of fat</b>, and a total of <b>530 calories</b>. 4 people found this recipe to be yummy and satisfying. A mixture of couscous, salt, chicken broth, and a handful of other ingredients are all it takes to make this recipe so scrumptious. It works well as a main course. It will be a hit at your <b>The Fourth Of July</b> event. From preparation to the plate, this recipe takes around <b>1 hour and 30 minutes</b>. It is brought to you by Foodista. With a spoonacular <b>score of 59%</b>, this dish is pretty good. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/dragon-salad-couscous-summer-salad-1364371\">Dragon Salad - Couscous Summer Salad</a>, <a href=\"https://spoonacular.com/recipes/dragon-salad-couscous-summer-salad-1632269\">Dragon Salad - Couscous Summer Salad</a>, and <a href=\"https://spoonacular.com/recipes/summer-couscous-salad-568691\">Summer Couscous Salad</a>.",
          "analyzedInstructions": [
              {
                  "steps": [
                      {
                          "number": 1,
                          "step": "Preheat oven to 250 degrees Farenheit",

                      },
                      {
                          "number": 2,
                          "step": "Halve tomatoes through stem ends ( from top to bottom, not across the middle) and arrange, cut side up, in one layer in a large, shallow baking pan.",
                         
                      },
                      {
                          "number": 3,
                          "step": "Add garlic to pan and roast in the middle of the oven until tomatoes are slightly shriveled around the edges, about 1 hour.Cool in pan on rack for 30 minutes, or until no longer hot.While tomatoes are roasting, bring the broth to a boil in a 3 qt. saucepan. Stir in couscous, let simmer in pan for about two minutes.Cover pan and remove from heat, let stand for 5-10 minutes (or, if you're using boxed couscous, just follow the cooking directions on the package).When couscous has cooled, run your (clean!) hands through it to break up any clumps.When garlic is cool enough to handle, peel it the garlic and using a small knife chop the garlic very finely.",
                       
                    
                      },
                     
                  ]
              }
          ],
      },
      {
          "extendedIngredients": [
              {
                  "id": 1002030,
                  "original": "1/2 teaspoon black pepper",
              },
              {
                  "id": 10311529,
                  "original": "2 pints red grape or cherry tomatoes",
                  
              },
              {
                  "id": 6615,
                  "original": "2 3/4 cups chicken broth (vegetable broth would be fine too)",
                
              },
              {
                  "id": 1034053,
                 
                  "original": "1/4 cup Extra Virgin Olive Oil",
                 
              },
              {
                  "id": 1019,
                 
                  "original": "1/3 pound feta cheese",
                
              },
              {
                  "id": 10211297,
                
                  "original": "1/4 cup torn or chopped fresh flat leaf parsley",
                
              },
              {
                  "id": 2064,
                
                  "original": "1/4 cup fresh mint",
               
              },
          ],
          "id": 641631,
          "title": "Dragon Salad - Couscous Summer Salad",
          "image": "https://spoonacular.com/recipeImages/641631-556x370.jpg",
         "dishTypes": [
                "lunch",
                "main course",
                "main dish",
                "dinner"
            ],
          "summary": "Dragon Salad - Couscous Summer Salad is a <b>lacto ovo vegetarian</b> recipe with 6 servings. For <b>$4.04 per serving</b>, this recipe <b>covers 16%</b> of your daily requirements of vitamins and minerals. One portion of this dish contains around <b>18g of protein</b>, <b>18g of fat</b>, and a total of <b>530 calories</b>. 4 people found this recipe to be yummy and satisfying. A mixture of couscous, salt, chicken broth, and a handful of other ingredients are all it takes to make this recipe so scrumptious. It works well as a main course. It will be a hit at your <b>The Fourth Of July</b> event. From preparation to the plate, this recipe takes around <b>1 hour and 30 minutes</b>. It is brought to you by Foodista. With a spoonacular <b>score of 59%</b>, this dish is pretty good. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/dragon-salad-couscous-summer-salad-1364371\">Dragon Salad - Couscous Summer Salad</a>, <a href=\"https://spoonacular.com/recipes/dragon-salad-couscous-summer-salad-1632269\">Dragon Salad - Couscous Summer Salad</a>, and <a href=\"https://spoonacular.com/recipes/summer-couscous-salad-568691\">Summer Couscous Salad</a>.",
          "analyzedInstructions": [
              {
                  "steps": [
                      {
                          "number": 1,
                          "step": "Preheat oven to 250 degrees Farenheit",

                      },
                      {
                          "number": 2,
                          "step": "Halve tomatoes through stem ends ( from top to bottom, not across the middle) and arrange, cut side up, in one layer in a large, shallow baking pan.",
                         
                      },
                      {
                          "number": 3,
                          "step": "Add garlic to pan and roast in the middle of the oven until tomatoes are slightly shriveled around the edges, about 1 hour.Cool in pan on rack for 30 minutes, or until no longer hot.While tomatoes are roasting, bring the broth to a boil in a 3 qt. saucepan. Stir in couscous, let simmer in pan for about two minutes.Cover pan and remove from heat, let stand for 5-10 minutes (or, if you're using boxed couscous, just follow the cooking directions on the package).When couscous has cooled, run your (clean!) hands through it to break up any clumps.When garlic is cool enough to handle, peel it the garlic and using a small knife chop the garlic very finely.",
                       
                    
                      },
                     
                  ]
              }
          ],
      },
      {
          "extendedIngredients": [
              {
                  "id": 1002030,
                  "original": "1/2 teaspoon black pepper",
              },
              {
                  "id": 10311529,
                  "original": "2 pints red grape or cherry tomatoes",
                  
              },
              {
                  "id": 6615,
                  "original": "2 3/4 cups chicken broth (vegetable broth would be fine too)",
                
              },
              {
                  "id": 1034053,
                 
                  "original": "1/4 cup Extra Virgin Olive Oil",
                 
              },
              {
                  "id": 1019,
                 
                  "original": "1/3 pound feta cheese",
                
              },
              {
                  "id": 10211297,
                
                  "original": "1/4 cup torn or chopped fresh flat leaf parsley",
                
              },
              {
                  "id": 2064,
                
                  "original": "1/4 cup fresh mint",
               
              },
          ],
          "id": 641631,
          "title": "Dragon Salad - Couscous Summer Salad",
          "image": "https://spoonacular.com/recipeImages/641631-556x370.jpg",
         "dishTypes": [
                "lunch",
                "main course",
                "main dish",
                "dinner"
            ],
          "summary": "Dragon Salad - Couscous Summer Salad is a <b>lacto ovo vegetarian</b> recipe with 6 servings. For <b>$4.04 per serving</b>, this recipe <b>covers 16%</b> of your daily requirements of vitamins and minerals. One portion of this dish contains around <b>18g of protein</b>, <b>18g of fat</b>, and a total of <b>530 calories</b>. 4 people found this recipe to be yummy and satisfying. A mixture of couscous, salt, chicken broth, and a handful of other ingredients are all it takes to make this recipe so scrumptious. It works well as a main course. It will be a hit at your <b>The Fourth Of July</b> event. From preparation to the plate, this recipe takes around <b>1 hour and 30 minutes</b>. It is brought to you by Foodista. With a spoonacular <b>score of 59%</b>, this dish is pretty good. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/dragon-salad-couscous-summer-salad-1364371\">Dragon Salad - Couscous Summer Salad</a>, <a href=\"https://spoonacular.com/recipes/dragon-salad-couscous-summer-salad-1632269\">Dragon Salad - Couscous Summer Salad</a>, and <a href=\"https://spoonacular.com/recipes/summer-couscous-salad-568691\">Summer Couscous Salad</a>.",
          "analyzedInstructions": [
              {
                  "steps": [
                      {
                          "number": 1,
                          "step": "Preheat oven to 250 degrees Farenheit",

                      },
                      {
                          "number": 2,
                          "step": "Halve tomatoes through stem ends ( from top to bottom, not across the middle) and arrange, cut side up, in one layer in a large, shallow baking pan.",
                         
                      },
                      {
                          "number": 3,
                          "step": "Add garlic to pan and roast in the middle of the oven until tomatoes are slightly shriveled around the edges, about 1 hour.Cool in pan on rack for 30 minutes, or until no longer hot.While tomatoes are roasting, bring the broth to a boil in a 3 qt. saucepan. Stir in couscous, let simmer in pan for about two minutes.Cover pan and remove from heat, let stand for 5-10 minutes (or, if you're using boxed couscous, just follow the cooking directions on the package).When couscous has cooled, run your (clean!) hands through it to break up any clumps.When garlic is cool enough to handle, peel it the garlic and using a small knife chop the garlic very finely.",
                       
                    
                      },
                     
                  ]
              }
          ],
      },
      {
          "extendedIngredients": [
              {
                  "id": 1002030,
                  "original": "1/2 teaspoon black pepper",
              },
              {
                  "id": 10311529,
                  "original": "2 pints red grape or cherry tomatoes",
                  
              },
              {
                  "id": 6615,
                  "original": "2 3/4 cups chicken broth (vegetable broth would be fine too)",
                
              },
              {
                  "id": 1034053,
                 
                  "original": "1/4 cup Extra Virgin Olive Oil",
                 
              },
              {
                  "id": 1019,
                 
                  "original": "1/3 pound feta cheese",
                
              },
              {
                  "id": 10211297,
                
                  "original": "1/4 cup torn or chopped fresh flat leaf parsley",
                
              },
              {
                  "id": 2064,
                
                  "original": "1/4 cup fresh mint",
               
              },
          ],
          "id": 641631,
          "title": "Dragon Salad - Couscous Summer Salad",
          "image": "https://spoonacular.com/recipeImages/641631-556x370.jpg",
         "dishTypes": [
                "lunch",
                "main course",
                "main dish",
                "dinner"
            ],
          "summary": "Dragon Salad - Couscous Summer Salad is a <b>lacto ovo vegetarian</b> recipe with 6 servings. For <b>$4.04 per serving</b>, this recipe <b>covers 16%</b> of your daily requirements of vitamins and minerals. One portion of this dish contains around <b>18g of protein</b>, <b>18g of fat</b>, and a total of <b>530 calories</b>. 4 people found this recipe to be yummy and satisfying. A mixture of couscous, salt, chicken broth, and a handful of other ingredients are all it takes to make this recipe so scrumptious. It works well as a main course. It will be a hit at your <b>The Fourth Of July</b> event. From preparation to the plate, this recipe takes around <b>1 hour and 30 minutes</b>. It is brought to you by Foodista. With a spoonacular <b>score of 59%</b>, this dish is pretty good. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/dragon-salad-couscous-summer-salad-1364371\">Dragon Salad - Couscous Summer Salad</a>, <a href=\"https://spoonacular.com/recipes/dragon-salad-couscous-summer-salad-1632269\">Dragon Salad - Couscous Summer Salad</a>, and <a href=\"https://spoonacular.com/recipes/summer-couscous-salad-568691\">Summer Couscous Salad</a>.",
          "analyzedInstructions": [
              {
                  "steps": [
                      {
                          "number": 1,
                          "step": "Preheat oven to 250 degrees Farenheit",

                      },
                      {
                          "number": 2,
                          "step": "Halve tomatoes through stem ends ( from top to bottom, not across the middle) and arrange, cut side up, in one layer in a large, shallow baking pan.",
                         
                      },
                      {
                          "number": 3,
                          "step": "Add garlic to pan and roast in the middle of the oven until tomatoes are slightly shriveled around the edges, about 1 hour.Cool in pan on rack for 30 minutes, or until no longer hot.While tomatoes are roasting, bring the broth to a boil in a 3 qt. saucepan. Stir in couscous, let simmer in pan for about two minutes.Cover pan and remove from heat, let stand for 5-10 minutes (or, if you're using boxed couscous, just follow the cooking directions on the package).When couscous has cooled, run your (clean!) hands through it to break up any clumps.When garlic is cool enough to handle, peel it the garlic and using a small knife chop the garlic very finely.",
                       
                    
                      },
                     
                  ]
              }
          ],
      },
      {
          "extendedIngredients": [
              {
                  "id": 1002030,
                  "original": "1/2 teaspoon black pepper",
              },
              {
                  "id": 10311529,
                  "original": "2 pints red grape or cherry tomatoes",
                  
              },
              {
                  "id": 6615,
                  "original": "2 3/4 cups chicken broth (vegetable broth would be fine too)",
                
              },
              {
                  "id": 1034053,
                 
                  "original": "1/4 cup Extra Virgin Olive Oil",
                 
              },
              {
                  "id": 1019,
                 
                  "original": "1/3 pound feta cheese",
                
              },
              {
                  "id": 10211297,
                
                  "original": "1/4 cup torn or chopped fresh flat leaf parsley",
                
              },
              {
                  "id": 2064,
                
                  "original": "1/4 cup fresh mint",
               
              },
          ],
          "id": 641631,
          "title": "Dragon Salad - Couscous Summer Salad",
          "image": "https://spoonacular.com/recipeImages/641631-556x370.jpg",
         "dishTypes": [
                "lunch",
                "main course",
                "main dish",
                "dinner"
            ],
          "summary": "Dragon Salad - Couscous Summer Salad is a <b>lacto ovo vegetarian</b> recipe with 6 servings. For <b>$4.04 per serving</b>, this recipe <b>covers 16%</b> of your daily requirements of vitamins and minerals. One portion of this dish contains around <b>18g of protein</b>, <b>18g of fat</b>, and a total of <b>530 calories</b>. 4 people found this recipe to be yummy and satisfying. A mixture of couscous, salt, chicken broth, and a handful of other ingredients are all it takes to make this recipe so scrumptious. It works well as a main course. It will be a hit at your <b>The Fourth Of July</b> event. From preparation to the plate, this recipe takes around <b>1 hour and 30 minutes</b>. It is brought to you by Foodista. With a spoonacular <b>score of 59%</b>, this dish is pretty good. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/dragon-salad-couscous-summer-salad-1364371\">Dragon Salad - Couscous Summer Salad</a>, <a href=\"https://spoonacular.com/recipes/dragon-salad-couscous-summer-salad-1632269\">Dragon Salad - Couscous Summer Salad</a>, and <a href=\"https://spoonacular.com/recipes/summer-couscous-salad-568691\">Summer Couscous Salad</a>.",
          "analyzedInstructions": [
              {
                  "steps": [
                      {
                          "number": 1,
                          "step": "Preheat oven to 250 degrees Farenheit",

                      },
                      {
                          "number": 2,
                          "step": "Halve tomatoes through stem ends ( from top to bottom, not across the middle) and arrange, cut side up, in one layer in a large, shallow baking pan.",
                         
                      },
                      {
                          "number": 3,
                          "step": "Add garlic to pan and roast in the middle of the oven until tomatoes are slightly shriveled around the edges, about 1 hour.Cool in pan on rack for 30 minutes, or until no longer hot.While tomatoes are roasting, bring the broth to a boil in a 3 qt. saucepan. Stir in couscous, let simmer in pan for about two minutes.Cover pan and remove from heat, let stand for 5-10 minutes (or, if you're using boxed couscous, just follow the cooking directions on the package).When couscous has cooled, run your (clean!) hands through it to break up any clumps.When garlic is cool enough to handle, peel it the garlic and using a small knife chop the garlic very finely.",
                       
                    
                      },
                     
                  ]
              }
          ],
      },
      {
          "extendedIngredients": [
              {
                  "id": 1002030,
                  "original": "1/2 teaspoon black pepper",
              },
              {
                  "id": 10311529,
                  "original": "2 pints red grape or cherry tomatoes",
                  
              },
              {
                  "id": 6615,
                  "original": "2 3/4 cups chicken broth (vegetable broth would be fine too)",
                
              },
              {
                  "id": 1034053,
                 
                  "original": "1/4 cup Extra Virgin Olive Oil",
                 
              },
              {
                  "id": 1019,
                 
                  "original": "1/3 pound feta cheese",
                
              },
              {
                  "id": 10211297,
                
                  "original": "1/4 cup torn or chopped fresh flat leaf parsley",
                
              },
              {
                  "id": 2064,
                
                  "original": "1/4 cup fresh mint",
               
              },
          ],
          "id": 641631,
          "title": "Dragon Salad - Couscous Summer Salad",
          "image": "https://spoonacular.com/recipeImages/641631-556x370.jpg",
         "dishTypes": [
                "lunch",
                "main course",
                "main dish",
                "dinner"
            ],
          "summary": "Dragon Salad - Couscous Summer Salad is a <b>lacto ovo vegetarian</b> recipe with 6 servings. For <b>$4.04 per serving</b>, this recipe <b>covers 16%</b> of your daily requirements of vitamins and minerals. One portion of this dish contains around <b>18g of protein</b>, <b>18g of fat</b>, and a total of <b>530 calories</b>. 4 people found this recipe to be yummy and satisfying. A mixture of couscous, salt, chicken broth, and a handful of other ingredients are all it takes to make this recipe so scrumptious. It works well as a main course. It will be a hit at your <b>The Fourth Of July</b> event. From preparation to the plate, this recipe takes around <b>1 hour and 30 minutes</b>. It is brought to you by Foodista. With a spoonacular <b>score of 59%</b>, this dish is pretty good. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/dragon-salad-couscous-summer-salad-1364371\">Dragon Salad - Couscous Summer Salad</a>, <a href=\"https://spoonacular.com/recipes/dragon-salad-couscous-summer-salad-1632269\">Dragon Salad - Couscous Summer Salad</a>, and <a href=\"https://spoonacular.com/recipes/summer-couscous-salad-568691\">Summer Couscous Salad</a>.",
          "analyzedInstructions": [
              {
                  "steps": [
                      {
                          "number": 1,
                          "step": "Preheat oven to 250 degrees Farenheit",

                      },
                      {
                          "number": 2,
                          "step": "Halve tomatoes through stem ends ( from top to bottom, not across the middle) and arrange, cut side up, in one layer in a large, shallow baking pan.",
                         
                      },
                      {
                          "number": 3,
                          "step": "Add garlic to pan and roast in the middle of the oven until tomatoes are slightly shriveled around the edges, about 1 hour.Cool in pan on rack for 30 minutes, or until no longer hot.While tomatoes are roasting, bring the broth to a boil in a 3 qt. saucepan. Stir in couscous, let simmer in pan for about two minutes.Cover pan and remove from heat, let stand for 5-10 minutes (or, if you're using boxed couscous, just follow the cooking directions on the package).When couscous has cooled, run your (clean!) hands through it to break up any clumps.When garlic is cool enough to handle, peel it the garlic and using a small knife chop the garlic very finely.",
                       
                    
                      },
                     
                  ]
              }
          ],
      },
      {
          "extendedIngredients": [
              {
                  "id": 1002030,
                  "original": "1/2 teaspoon black pepper",
              },
              {
                  "id": 10311529,
                  "original": "2 pints red grape or cherry tomatoes",
                  
              },
              {
                  "id": 6615,
                  "original": "2 3/4 cups chicken broth (vegetable broth would be fine too)",
                
              },
              {
                  "id": 1034053,
                 
                  "original": "1/4 cup Extra Virgin Olive Oil",
                 
              },
              {
                  "id": 1019,
                 
                  "original": "1/3 pound feta cheese",
                
              },
              {
                  "id": 10211297,
                
                  "original": "1/4 cup torn or chopped fresh flat leaf parsley",
                
              },
              {
                  "id": 2064,
                
                  "original": "1/4 cup fresh mint",
               
              },
          ],
          "id": 641631,
          "title": "Dragon Salad - Couscous Summer Salad",
          "image": "https://spoonacular.com/recipeImages/641631-556x370.jpg",
         "dishTypes": [
                "lunch",
                "main course",
                "main dish",
                "dinner"
            ],
          "summary": "Dragon Salad - Couscous Summer Salad is a <b>lacto ovo vegetarian</b> recipe with 6 servings. For <b>$4.04 per serving</b>, this recipe <b>covers 16%</b> of your daily requirements of vitamins and minerals. One portion of this dish contains around <b>18g of protein</b>, <b>18g of fat</b>, and a total of <b>530 calories</b>. 4 people found this recipe to be yummy and satisfying. A mixture of couscous, salt, chicken broth, and a handful of other ingredients are all it takes to make this recipe so scrumptious. It works well as a main course. It will be a hit at your <b>The Fourth Of July</b> event. From preparation to the plate, this recipe takes around <b>1 hour and 30 minutes</b>. It is brought to you by Foodista. With a spoonacular <b>score of 59%</b>, this dish is pretty good. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/dragon-salad-couscous-summer-salad-1364371\">Dragon Salad - Couscous Summer Salad</a>, <a href=\"https://spoonacular.com/recipes/dragon-salad-couscous-summer-salad-1632269\">Dragon Salad - Couscous Summer Salad</a>, and <a href=\"https://spoonacular.com/recipes/summer-couscous-salad-568691\">Summer Couscous Salad</a>.",
          "analyzedInstructions": [
              {
                  "steps": [
                      {
                          "number": 1,
                          "step": "Preheat oven to 250 degrees Farenheit",

                      },
                      {
                          "number": 2,
                          "step": "Halve tomatoes through stem ends ( from top to bottom, not across the middle) and arrange, cut side up, in one layer in a large, shallow baking pan.",
                         
                      },
                      {
                          "number": 3,
                          "step": "Add garlic to pan and roast in the middle of the oven until tomatoes are slightly shriveled around the edges, about 1 hour.Cool in pan on rack for 30 minutes, or until no longer hot.While tomatoes are roasting, bring the broth to a boil in a 3 qt. saucepan. Stir in couscous, let simmer in pan for about two minutes.Cover pan and remove from heat, let stand for 5-10 minutes (or, if you're using boxed couscous, just follow the cooking directions on the package).When couscous has cooled, run your (clean!) hands through it to break up any clumps.When garlic is cool enough to handle, peel it the garlic and using a small knife chop the garlic very finely.",
                       
                    
                      },
                     
                  ]
              }
          ],
      },
      {
          "extendedIngredients": [
              {
                  "id": 1002030,
                  "original": "1/2 teaspoon black pepper",
              },
              {
                  "id": 10311529,
                  "original": "2 pints red grape or cherry tomatoes",
                  
              },
              {
                  "id": 6615,
                  "original": "2 3/4 cups chicken broth (vegetable broth would be fine too)",
                
              },
              {
                  "id": 1034053,
                 
                  "original": "1/4 cup Extra Virgin Olive Oil",
                 
              },
              {
                  "id": 1019,
                 
                  "original": "1/3 pound feta cheese",
                
              },
              {
                  "id": 10211297,
                
                  "original": "1/4 cup torn or chopped fresh flat leaf parsley",
                
              },
              {
                  "id": 2064,
                
                  "original": "1/4 cup fresh mint",
               
              },
          ],
          "id": 641631,
          "title": "Dragon Salad - Couscous Summer Salad",
          "image": "https://spoonacular.com/recipeImages/641631-556x370.jpg",
         "dishTypes": [
                "lunch",
                "main course",
                "main dish",
                "dinner"
            ],
          "summary": "Dragon Salad - Couscous Summer Salad is a <b>lacto ovo vegetarian</b> recipe with 6 servings. For <b>$4.04 per serving</b>, this recipe <b>covers 16%</b> of your daily requirements of vitamins and minerals. One portion of this dish contains around <b>18g of protein</b>, <b>18g of fat</b>, and a total of <b>530 calories</b>. 4 people found this recipe to be yummy and satisfying. A mixture of couscous, salt, chicken broth, and a handful of other ingredients are all it takes to make this recipe so scrumptious. It works well as a main course. It will be a hit at your <b>The Fourth Of July</b> event. From preparation to the plate, this recipe takes around <b>1 hour and 30 minutes</b>. It is brought to you by Foodista. With a spoonacular <b>score of 59%</b>, this dish is pretty good. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/dragon-salad-couscous-summer-salad-1364371\">Dragon Salad - Couscous Summer Salad</a>, <a href=\"https://spoonacular.com/recipes/dragon-salad-couscous-summer-salad-1632269\">Dragon Salad - Couscous Summer Salad</a>, and <a href=\"https://spoonacular.com/recipes/summer-couscous-salad-568691\">Summer Couscous Salad</a>.",
          "analyzedInstructions": [
              {
                  "steps": [
                      {
                          "number": 1,
                          "step": "Preheat oven to 250 degrees Farenheit",

                      },
                      {
                          "number": 2,
                          "step": "Halve tomatoes through stem ends ( from top to bottom, not across the middle) and arrange, cut side up, in one layer in a large, shallow baking pan.",
                         
                      },
                      {
                          "number": 3,
                          "step": "Add garlic to pan and roast in the middle of the oven until tomatoes are slightly shriveled around the edges, about 1 hour.Cool in pan on rack for 30 minutes, or until no longer hot.While tomatoes are roasting, bring the broth to a boil in a 3 qt. saucepan. Stir in couscous, let simmer in pan for about two minutes.Cover pan and remove from heat, let stand for 5-10 minutes (or, if you're using boxed couscous, just follow the cooking directions on the package).When couscous has cooled, run your (clean!) hands through it to break up any clumps.When garlic is cool enough to handle, peel it the garlic and using a small knife chop the garlic very finely.",
                       
                    
                      },
                     
                  ]
              }
          ],
      },
      {
          "extendedIngredients": [
              {
                  "id": 1002030,
                  "original": "1/2 teaspoon black pepper",
              },
              {
                  "id": 10311529,
                  "original": "2 pints red grape or cherry tomatoes",
                  
              },
              {
                  "id": 6615,
                  "original": "2 3/4 cups chicken broth (vegetable broth would be fine too)",
                
              },
              {
                  "id": 1034053,
                 
                  "original": "1/4 cup Extra Virgin Olive Oil",
                 
              },
              {
                  "id": 1019,
                 
                  "original": "1/3 pound feta cheese",
                
              },
              {
                  "id": 10211297,
                
                  "original": "1/4 cup torn or chopped fresh flat leaf parsley",
                
              },
              {
                  "id": 2064,
                
                  "original": "1/4 cup fresh mint",
               
              },
          ],
          "id": 641631,
          "title": "Dragon Salad - Couscous Summer Salad",
          "image": "https://spoonacular.com/recipeImages/641631-556x370.jpg",
         "dishTypes": [
                "lunch",
                "main course",
                "main dish",
                "dinner"
            ],
          "summary": "Dragon Salad - Couscous Summer Salad is a <b>lacto ovo vegetarian</b> recipe with 6 servings. For <b>$4.04 per serving</b>, this recipe <b>covers 16%</b> of your daily requirements of vitamins and minerals. One portion of this dish contains around <b>18g of protein</b>, <b>18g of fat</b>, and a total of <b>530 calories</b>. 4 people found this recipe to be yummy and satisfying. A mixture of couscous, salt, chicken broth, and a handful of other ingredients are all it takes to make this recipe so scrumptious. It works well as a main course. It will be a hit at your <b>The Fourth Of July</b> event. From preparation to the plate, this recipe takes around <b>1 hour and 30 minutes</b>. It is brought to you by Foodista. With a spoonacular <b>score of 59%</b>, this dish is pretty good. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/dragon-salad-couscous-summer-salad-1364371\">Dragon Salad - Couscous Summer Salad</a>, <a href=\"https://spoonacular.com/recipes/dragon-salad-couscous-summer-salad-1632269\">Dragon Salad - Couscous Summer Salad</a>, and <a href=\"https://spoonacular.com/recipes/summer-couscous-salad-568691\">Summer Couscous Salad</a>.",
          "analyzedInstructions": [
              {
                  "steps": [
                      {
                          "number": 1,
                          "step": "Preheat oven to 250 degrees Farenheit",

                      },
                      {
                          "number": 2,
                          "step": "Halve tomatoes through stem ends ( from top to bottom, not across the middle) and arrange, cut side up, in one layer in a large, shallow baking pan.",
                         
                      },
                      {
                          "number": 3,
                          "step": "Add garlic to pan and roast in the middle of the oven until tomatoes are slightly shriveled around the edges, about 1 hour.Cool in pan on rack for 30 minutes, or until no longer hot.While tomatoes are roasting, bring the broth to a boil in a 3 qt. saucepan. Stir in couscous, let simmer in pan for about two minutes.Cover pan and remove from heat, let stand for 5-10 minutes (or, if you're using boxed couscous, just follow the cooking directions on the package).When couscous has cooled, run your (clean!) hands through it to break up any clumps.When garlic is cool enough to handle, peel it the garlic and using a small knife chop the garlic very finely.",
                       
                    
                      },
                     
                  ]
              }
          ],
      },
      {
          "extendedIngredients": [
              {
                  "id": 1002030,
                  "original": "1/2 teaspoon black pepper",
              },
              {
                  "id": 10311529,
                  "original": "2 pints red grape or cherry tomatoes",
                  
              },
              {
                  "id": 6615,
                  "original": "2 3/4 cups chicken broth (vegetable broth would be fine too)",
                
              },
              {
                  "id": 1034053,
                 
                  "original": "1/4 cup Extra Virgin Olive Oil",
                 
              },
              {
                  "id": 1019,
                 
                  "original": "1/3 pound feta cheese",
                
              },
              {
                  "id": 10211297,
                
                  "original": "1/4 cup torn or chopped fresh flat leaf parsley",
                
              },
              {
                  "id": 2064,
                
                  "original": "1/4 cup fresh mint",
               
              },
          ],
          "id": 641631,
          "title": "Dragon Salad - Couscous Summer Salad",
          "image": "https://spoonacular.com/recipeImages/641631-556x370.jpg",
         "dishTypes": [
                "lunch",
                "main course",
                "main dish",
                "dinner"
            ],
          "summary": "Dragon Salad - Couscous Summer Salad is a <b>lacto ovo vegetarian</b> recipe with 6 servings. For <b>$4.04 per serving</b>, this recipe <b>covers 16%</b> of your daily requirements of vitamins and minerals. One portion of this dish contains around <b>18g of protein</b>, <b>18g of fat</b>, and a total of <b>530 calories</b>. 4 people found this recipe to be yummy and satisfying. A mixture of couscous, salt, chicken broth, and a handful of other ingredients are all it takes to make this recipe so scrumptious. It works well as a main course. It will be a hit at your <b>The Fourth Of July</b> event. From preparation to the plate, this recipe takes around <b>1 hour and 30 minutes</b>. It is brought to you by Foodista. With a spoonacular <b>score of 59%</b>, this dish is pretty good. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/dragon-salad-couscous-summer-salad-1364371\">Dragon Salad - Couscous Summer Salad</a>, <a href=\"https://spoonacular.com/recipes/dragon-salad-couscous-summer-salad-1632269\">Dragon Salad - Couscous Summer Salad</a>, and <a href=\"https://spoonacular.com/recipes/summer-couscous-salad-568691\">Summer Couscous Salad</a>.",
          "analyzedInstructions": [
              {
                  "steps": [
                      {
                          "number": 1,
                          "step": "Preheat oven to 250 degrees Farenheit",

                      },
                      {
                          "number": 2,
                          "step": "Halve tomatoes through stem ends ( from top to bottom, not across the middle) and arrange, cut side up, in one layer in a large, shallow baking pan.",
                         
                      },
                      {
                          "number": 3,
                          "step": "Add garlic to pan and roast in the middle of the oven until tomatoes are slightly shriveled around the edges, about 1 hour.Cool in pan on rack for 30 minutes, or until no longer hot.While tomatoes are roasting, bring the broth to a boil in a 3 qt. saucepan. Stir in couscous, let simmer in pan for about two minutes.Cover pan and remove from heat, let stand for 5-10 minutes (or, if you're using boxed couscous, just follow the cooking directions on the package).When couscous has cooled, run your (clean!) hands through it to break up any clumps.When garlic is cool enough to handle, peel it the garlic and using a small knife chop the garlic very finely.",
                       
                    
                      },
                     
                  ]
              }
          ],
      },
      {
          "extendedIngredients": [
              {
                  "id": 1002030,
                  "original": "1/2 teaspoon black pepper",
              },
              {
                  "id": 10311529,
                  "original": "2 pints red grape or cherry tomatoes",
                  
              },
              {
                  "id": 6615,
                  "original": "2 3/4 cups chicken broth (vegetable broth would be fine too)",
                
              },
              {
                  "id": 1034053,
                 
                  "original": "1/4 cup Extra Virgin Olive Oil",
                 
              },
              {
                  "id": 1019,
                 
                  "original": "1/3 pound feta cheese",
                
              },
              {
                  "id": 10211297,
                
                  "original": "1/4 cup torn or chopped fresh flat leaf parsley",
                
              },
              {
                  "id": 2064,
                
                  "original": "1/4 cup fresh mint",
               
              },
          ],
          "id": 641631,
          "title": "Dragon Salad - Couscous Summer Salad",
          "image": "https://spoonacular.com/recipeImages/641631-556x370.jpg",
         "dishTypes": [
                "lunch",
                "main course",
                "main dish",
                "dinner"
            ],
          "summary": "Dragon Salad - Couscous Summer Salad is a <b>lacto ovo vegetarian</b> recipe with 6 servings. For <b>$4.04 per serving</b>, this recipe <b>covers 16%</b> of your daily requirements of vitamins and minerals. One portion of this dish contains around <b>18g of protein</b>, <b>18g of fat</b>, and a total of <b>530 calories</b>. 4 people found this recipe to be yummy and satisfying. A mixture of couscous, salt, chicken broth, and a handful of other ingredients are all it takes to make this recipe so scrumptious. It works well as a main course. It will be a hit at your <b>The Fourth Of July</b> event. From preparation to the plate, this recipe takes around <b>1 hour and 30 minutes</b>. It is brought to you by Foodista. With a spoonacular <b>score of 59%</b>, this dish is pretty good. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/dragon-salad-couscous-summer-salad-1364371\">Dragon Salad - Couscous Summer Salad</a>, <a href=\"https://spoonacular.com/recipes/dragon-salad-couscous-summer-salad-1632269\">Dragon Salad - Couscous Summer Salad</a>, and <a href=\"https://spoonacular.com/recipes/summer-couscous-salad-568691\">Summer Couscous Salad</a>.",
          "analyzedInstructions": [
              {
                  "steps": [
                      {
                          "number": 1,
                          "step": "Preheat oven to 250 degrees Farenheit",

                      },
                      {
                          "number": 2,
                          "step": "Halve tomatoes through stem ends ( from top to bottom, not across the middle) and arrange, cut side up, in one layer in a large, shallow baking pan.",
                         
                      },
                      {
                          "number": 3,
                          "step": "Add garlic to pan and roast in the middle of the oven until tomatoes are slightly shriveled around the edges, about 1 hour.Cool in pan on rack for 30 minutes, or until no longer hot.While tomatoes are roasting, bring the broth to a boil in a 3 qt. saucepan. Stir in couscous, let simmer in pan for about two minutes.Cover pan and remove from heat, let stand for 5-10 minutes (or, if you're using boxed couscous, just follow the cooking directions on the package).When couscous has cooled, run your (clean!) hands through it to break up any clumps.When garlic is cool enough to handle, peel it the garlic and using a small knife chop the garlic very finely.",
                       
                    
                      },
                     
                  ]
              }
          ],
      },
      {
          "extendedIngredients": [
              {
                  "id": 1002030,
                  "original": "1/2 teaspoon black pepper",
              },
              {
                  "id": 10311529,
                  "original": "2 pints red grape or cherry tomatoes",
                  
              },
              {
                  "id": 6615,
                  "original": "2 3/4 cups chicken broth (vegetable broth would be fine too)",
                
              },
              {
                  "id": 1034053,
                 
                  "original": "1/4 cup Extra Virgin Olive Oil",
                 
              },
              {
                  "id": 1019,
                 
                  "original": "1/3 pound feta cheese",
                
              },
              {
                  "id": 10211297,
                
                  "original": "1/4 cup torn or chopped fresh flat leaf parsley",
                
              },
              {
                  "id": 2064,
                
                  "original": "1/4 cup fresh mint",
               
              },
          ],
          "id": 641631,
          "title": "Dragon Salad - Couscous Summer Salad",
          "image": "https://spoonacular.com/recipeImages/641631-556x370.jpg",
         "dishTypes": [
                "lunch",
                "main course",
                "main dish",
                "dinner"
            ],
          "summary": "Dragon Salad - Couscous Summer Salad is a <b>lacto ovo vegetarian</b> recipe with 6 servings. For <b>$4.04 per serving</b>, this recipe <b>covers 16%</b> of your daily requirements of vitamins and minerals. One portion of this dish contains around <b>18g of protein</b>, <b>18g of fat</b>, and a total of <b>530 calories</b>. 4 people found this recipe to be yummy and satisfying. A mixture of couscous, salt, chicken broth, and a handful of other ingredients are all it takes to make this recipe so scrumptious. It works well as a main course. It will be a hit at your <b>The Fourth Of July</b> event. From preparation to the plate, this recipe takes around <b>1 hour and 30 minutes</b>. It is brought to you by Foodista. With a spoonacular <b>score of 59%</b>, this dish is pretty good. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/dragon-salad-couscous-summer-salad-1364371\">Dragon Salad - Couscous Summer Salad</a>, <a href=\"https://spoonacular.com/recipes/dragon-salad-couscous-summer-salad-1632269\">Dragon Salad - Couscous Summer Salad</a>, and <a href=\"https://spoonacular.com/recipes/summer-couscous-salad-568691\">Summer Couscous Salad</a>.",
          "analyzedInstructions": [
              {
                  "steps": [
                      {
                          "number": 1,
                          "step": "Preheat oven to 250 degrees Farenheit",

                      },
                      {
                          "number": 2,
                          "step": "Halve tomatoes through stem ends ( from top to bottom, not across the middle) and arrange, cut side up, in one layer in a large, shallow baking pan.",
                         
                      },
                      {
                          "number": 3,
                          "step": "Add garlic to pan and roast in the middle of the oven until tomatoes are slightly shriveled around the edges, about 1 hour.Cool in pan on rack for 30 minutes, or until no longer hot.While tomatoes are roasting, bring the broth to a boil in a 3 qt. saucepan. Stir in couscous, let simmer in pan for about two minutes.Cover pan and remove from heat, let stand for 5-10 minutes (or, if you're using boxed couscous, just follow the cooking directions on the package).When couscous has cooled, run your (clean!) hands through it to break up any clumps.When garlic is cool enough to handle, peel it the garlic and using a small knife chop the garlic very finely.",
                       
                    
                      },
                     
                  ]
              }
          ],
      },
      {
          "extendedIngredients": [
              {
                  "id": 1002030,
                  "original": "1/2 teaspoon black pepper",
              },
              {
                  "id": 10311529,
                  "original": "2 pints red grape or cherry tomatoes",
                  
              },
              {
                  "id": 6615,
                  "original": "2 3/4 cups chicken broth (vegetable broth would be fine too)",
                
              },
              {
                  "id": 1034053,
                 
                  "original": "1/4 cup Extra Virgin Olive Oil",
                 
              },
              {
                  "id": 1019,
                 
                  "original": "1/3 pound feta cheese",
                
              },
              {
                  "id": 10211297,
                
                  "original": "1/4 cup torn or chopped fresh flat leaf parsley",
                
              },
              {
                  "id": 2064,
                
                  "original": "1/4 cup fresh mint",
               
              },
          ],
          "id": 641631,
          "title": "Dragon Salad - Couscous Summer Salad",
          "image": "https://spoonacular.com/recipeImages/641631-556x370.jpg",
         "dishTypes": [
                "lunch",
                "main course",
                "main dish",
                "dinner"
            ],
          "summary": "Dragon Salad - Couscous Summer Salad is a <b>lacto ovo vegetarian</b> recipe with 6 servings. For <b>$4.04 per serving</b>, this recipe <b>covers 16%</b> of your daily requirements of vitamins and minerals. One portion of this dish contains around <b>18g of protein</b>, <b>18g of fat</b>, and a total of <b>530 calories</b>. 4 people found this recipe to be yummy and satisfying. A mixture of couscous, salt, chicken broth, and a handful of other ingredients are all it takes to make this recipe so scrumptious. It works well as a main course. It will be a hit at your <b>The Fourth Of July</b> event. From preparation to the plate, this recipe takes around <b>1 hour and 30 minutes</b>. It is brought to you by Foodista. With a spoonacular <b>score of 59%</b>, this dish is pretty good. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/dragon-salad-couscous-summer-salad-1364371\">Dragon Salad - Couscous Summer Salad</a>, <a href=\"https://spoonacular.com/recipes/dragon-salad-couscous-summer-salad-1632269\">Dragon Salad - Couscous Summer Salad</a>, and <a href=\"https://spoonacular.com/recipes/summer-couscous-salad-568691\">Summer Couscous Salad</a>.",
          "analyzedInstructions": [
              {
                  "steps": [
                      {
                          "number": 1,
                          "step": "Preheat oven to 250 degrees Farenheit",

                      },
                      {
                          "number": 2,
                          "step": "Halve tomatoes through stem ends ( from top to bottom, not across the middle) and arrange, cut side up, in one layer in a large, shallow baking pan.",
                         
                      },
                      {
                          "number": 3,
                          "step": "Add garlic to pan and roast in the middle of the oven until tomatoes are slightly shriveled around the edges, about 1 hour.Cool in pan on rack for 30 minutes, or until no longer hot.While tomatoes are roasting, bring the broth to a boil in a 3 qt. saucepan. Stir in couscous, let simmer in pan for about two minutes.Cover pan and remove from heat, let stand for 5-10 minutes (or, if you're using boxed couscous, just follow the cooking directions on the package).When couscous has cooled, run your (clean!) hands through it to break up any clumps.When garlic is cool enough to handle, peel it the garlic and using a small knife chop the garlic very finely.",
                       
                    
                      },
                     
                  ]
              }
          ],
      },
      {
          "extendedIngredients": [
              {
                  "id": 1002030,
                  "original": "1/2 teaspoon black pepper",
              },
              {
                  "id": 10311529,
                  "original": "2 pints red grape or cherry tomatoes",
                  
              },
              {
                  "id": 6615,
                  "original": "2 3/4 cups chicken broth (vegetable broth would be fine too)",
                
              },
              {
                  "id": 1034053,
                 
                  "original": "1/4 cup Extra Virgin Olive Oil",
                 
              },
              {
                  "id": 1019,
                 
                  "original": "1/3 pound feta cheese",
                
              },
              {
                  "id": 10211297,
                
                  "original": "1/4 cup torn or chopped fresh flat leaf parsley",
                
              },
              {
                  "id": 2064,
                
                  "original": "1/4 cup fresh mint",
               
              },
          ],
          "id": 641631,
          "title": "Dragon Salad - Couscous Summer Salad",
          "image": "https://spoonacular.com/recipeImages/641631-556x370.jpg",
         "dishTypes": [
                "lunch",
                "main course",
                "main dish",
                "dinner"
            ],
          "summary": "Dragon Salad - Couscous Summer Salad is a <b>lacto ovo vegetarian</b> recipe with 6 servings. For <b>$4.04 per serving</b>, this recipe <b>covers 16%</b> of your daily requirements of vitamins and minerals. One portion of this dish contains around <b>18g of protein</b>, <b>18g of fat</b>, and a total of <b>530 calories</b>. 4 people found this recipe to be yummy and satisfying. A mixture of couscous, salt, chicken broth, and a handful of other ingredients are all it takes to make this recipe so scrumptious. It works well as a main course. It will be a hit at your <b>The Fourth Of July</b> event. From preparation to the plate, this recipe takes around <b>1 hour and 30 minutes</b>. It is brought to you by Foodista. With a spoonacular <b>score of 59%</b>, this dish is pretty good. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/dragon-salad-couscous-summer-salad-1364371\">Dragon Salad - Couscous Summer Salad</a>, <a href=\"https://spoonacular.com/recipes/dragon-salad-couscous-summer-salad-1632269\">Dragon Salad - Couscous Summer Salad</a>, and <a href=\"https://spoonacular.com/recipes/summer-couscous-salad-568691\">Summer Couscous Salad</a>.",
          "analyzedInstructions": [
              {
                  "steps": [
                      {
                          "number": 1,
                          "step": "Preheat oven to 250 degrees Farenheit",

                      },
                      {
                          "number": 2,
                          "step": "Halve tomatoes through stem ends ( from top to bottom, not across the middle) and arrange, cut side up, in one layer in a large, shallow baking pan.",
                         
                      },
                      {
                          "number": 3,
                          "step": "Add garlic to pan and roast in the middle of the oven until tomatoes are slightly shriveled around the edges, about 1 hour.Cool in pan on rack for 30 minutes, or until no longer hot.While tomatoes are roasting, bring the broth to a boil in a 3 qt. saucepan. Stir in couscous, let simmer in pan for about two minutes.Cover pan and remove from heat, let stand for 5-10 minutes (or, if you're using boxed couscous, just follow the cooking directions on the package).When couscous has cooled, run your (clean!) hands through it to break up any clumps.When garlic is cool enough to handle, peel it the garlic and using a small knife chop the garlic very finely.",
                       
                    
                      },
                     
                  ]
              }
          ],
      },
  ]
 }

 
}
