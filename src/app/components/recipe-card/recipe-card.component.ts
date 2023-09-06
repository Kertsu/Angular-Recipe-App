import { Component, Input, OnInit } from '@angular/core';
import { Favorite } from 'src/app/models/Favorite';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {
  @Input() recipe: any;
  @Input() type: any;
  isFavorite: boolean = false; // Add this property

  constructor(private storageService: StorageService) {}

  ngOnInit() {
    // Check if the recipe is in favorites when the component initializes
    this.isFavorite = this.storageService.isFavorite(this.recipe);
  }

  addToFavorites(recipe: Favorite) {
    this.storageService.addToFavorites(recipe);
    this.isFavorite = true;
  }

  removeFromFavorites(recipe: Favorite) {
    this.storageService.removeFromFavorites(recipe);
    this.isFavorite = false;
  }
}
