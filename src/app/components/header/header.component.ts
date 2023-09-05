import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showMenu: any;
  subscription!: Subscription;
  constructor(private uiService: UiService){
    this.subscription = this.uiService.onToggleMenu().subscribe((value) => this.showMenu = value)
  }

toggleMenu(){
  this.uiService.toggleMenu()
}
}
