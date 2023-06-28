import { Component } from '@angular/core';
import { Utilisateur } from '../auth/classes/utilisateur';
import { Router } from '@angular/router';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent {

  sessionManager: Utilisateur=new Utilisateur();
  constructor(
    private router: Router
  ){
    
  }
  ngOnInit() {
    var storedUserString = localStorage.getItem("responsable");
    if (storedUserString !== null) {
      this.sessionManager = JSON.parse(storedUserString as any);
    }else{
      this.router.navigate(["/"]);
    }
  }
}
