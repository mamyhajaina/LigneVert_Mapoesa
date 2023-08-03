import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/modules/auth/classes/utilisateur';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  hideMenus: boolean | undefined = false;

  sessionManager: Utilisateur = new Utilisateur();


  constructor(
    private router: Router,
    private element: ElementRef,
  ) { }

  ngOnInit() {
    var storedUserString = null;
    if (localStorage.getItem("manager") !== null) {
      storedUserString = localStorage.getItem("manager");
    } else {
      storedUserString = localStorage.getItem("responsable");
    }

    if (storedUserString !== null) {
      this.sessionManager = JSON.parse(storedUserString as any);
      console.log("sessionManager", this.sessionManager);
    } else {
      this.router.navigate(["/"]);
    }
  }

  deconneter() {
    localStorage.removeItem('manager');
    localStorage.removeItem('responsable');
    this.router.navigate(['/']);
  }

  hideMenu() {
    this.hideMenus = !this.hideMenus;
    var $toggle = document.getElementsByTagName('body')[0];
    if (this.hideMenus) {
      $toggle.classList.add('toggle-sidebar');
    } else {
      $toggle.classList.remove('toggle-sidebar');
    }
  }

}
