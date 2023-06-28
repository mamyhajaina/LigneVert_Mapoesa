import { Component } from '@angular/core';
import { Utilisateur } from '../auth/classes/utilisateur';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent {

  sessionManager: Utilisateur=new Utilisateur();
  constructor(
    private router: Router
  ){
    
  }
  ngOnInit() {
    var storedUserString = localStorage.getItem("manager");
    if (storedUserString !== null) {
      this.sessionManager = JSON.parse(storedUserString as any);
    }else{
      this.router.navigate(["/"]);
    }
    console.log("Session manager",this.sessionManager );
  }


}
