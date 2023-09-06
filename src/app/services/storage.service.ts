import { EventEmitter, Injectable, Output } from '@angular/core';
import { Favorite } from '../models/Favorite';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  favoritesUpdated= new EventEmitter();

  constructor() { }

  getFavorites(){
    const existingFavoritesJSON =  localStorage.getItem('favorites');

    const existingFavorites = existingFavoritesJSON ? JSON.parse(existingFavoritesJSON) : []

    return existingFavorites;
  }

  addToFavorites(recipe: Favorite){
    const favoritesJSON = localStorage.getItem('favorites')

    const existingFavorites = favoritesJSON? JSON.parse(favoritesJSON) : [];

    const favorites = existingFavorites;

    const newFavorite = {
      id: recipe.id,
      title: recipe.title,
      image: recipe.image,
    } 

    favorites.push(newFavorite)

    localStorage.setItem('favorites', JSON.stringify( favorites));

    this.favoritesUpdated.emit()
  }

  removeFromFavorites(recipe: Favorite){
      const favoritesJSON = localStorage.getItem('favorites');
      const existingFavorites = favoritesJSON ? JSON.parse(favoritesJSON) : [];
  
      const indexToRemove = existingFavorites.findIndex((favRecipe: Favorite) => favRecipe.id === recipe.id);
  
      if (indexToRemove !== -1) {
        existingFavorites.splice(indexToRemove, 1);
        
        localStorage.setItem('favorites', JSON.stringify(existingFavorites));
    this.favoritesUpdated.emit()

      }
  }

  isFavorite(recipe: Favorite): boolean {
    const favoritesJSON = localStorage.getItem('favorites');
    const existingFavorites = favoritesJSON ? JSON.parse(favoritesJSON) : [];

    return existingFavorites.some((favRecipe: Favorite) => favRecipe.id === recipe.id);
}

}
