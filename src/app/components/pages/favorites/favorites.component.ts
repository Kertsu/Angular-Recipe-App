import { Component, OnInit } from '@angular/core';
import { Favorite } from 'src/app/models/Favorite';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit{
  favorites:  Favorite[] = []


  constructor(private storageService: StorageService){}

  ngOnInit(): void {
      this.favorites = this.storageService.getFavorites()

      this.storageService.favoritesUpdated.subscribe(()=>{
        this.favorites = this.storageService.getFavorites();
      })
  }
}
