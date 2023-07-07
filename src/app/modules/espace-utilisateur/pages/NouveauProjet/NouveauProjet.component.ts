import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-NouveauProjet',
  templateUrl: './NouveauProjet.component.html',
  styleUrls: ['./NouveauProjet.component.css']
})
export class NouveauProjetComponent implements OnInit {


  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  insertUtilisateur(){
    
  }

  insertProjet(){
    this.navigateToMofidifer();
  }
  navigateToMofidifer(){
    this.router.navigate(['/utilisateur/modifierProjet']);
  }

  

  
}
