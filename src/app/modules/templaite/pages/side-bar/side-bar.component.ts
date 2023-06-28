import { Menu } from './../../classes/menu';
import { Component, Input } from '@angular/core';
import { MenuItem } from '../../classes/menuItem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  @Input() typeMenu?: string = '';
  menu: MenuItem[] = [];
  isMenuOpen = false;

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    if (this.typeMenu == 'utilisateur') {
      this.menu = Menu.menuUtilisateur;
      console.log("menu: " + this.menu);
    } else {
      this.menu = Menu.menuManager;
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  nafigate(route: string){
    this.router.navigate([route]);
  }
}
