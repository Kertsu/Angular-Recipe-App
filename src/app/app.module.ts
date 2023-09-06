import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FeatherModule } from 'angular-feather';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'

import {Menu, X, Search} from 'angular-feather/icons'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout/layout.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { RandomRecipeComponent } from './components/random-recipe/random-recipe.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { DishTypesComponent } from './components/dish-types/dish-types.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';


const icons = {
  Menu, X, Search
}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    HomeComponent,
    SearchComponent,
    RandomRecipeComponent,
    RecipeCardComponent,
    DishTypesComponent,
    LoadingSpinnerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FeatherModule.pick(icons), HttpClientModule
  ], exports:[FeatherModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
