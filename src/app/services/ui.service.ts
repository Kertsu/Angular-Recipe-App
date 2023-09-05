import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class UiService {
  showMenu: boolean = false;
  subject = new Subject();

  constructor() { }

  toggleMenu(){
    this.showMenu = !this.showMenu;
    this.subject.next(this.showMenu)
  }

  onToggleMenu(){
    return this.subject.asObservable()
  }
}
