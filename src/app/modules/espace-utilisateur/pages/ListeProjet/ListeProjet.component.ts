import { Component, OnInit } from '@angular/core';
import { Projet } from '../../classes/Projet';
import { DataResponse } from 'src/app/modules/templaite/classes/dataResponse';
import { ProjetService } from '../../services/Projet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ListeProjet',
  templateUrl: './ListeProjet.component.html',
  styleUrls: ['./ListeProjet.component.css']
})
export class ListeProjetComponent implements OnInit {

  projet: Projet[]=[];

  constructor(
    private projetService: ProjetService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getProjetAll();
  }

  getProjetAll(){
    this.projetService.projetAll().subscribe(
      (data: DataResponse)=>{
        this.projet=data.contenu as Projet[];
        console.log("projet",this.projet);
        
      }
    );
  }

  navigateToMofidifer(projet: any){
    this.router.navigate(['/utilisateur/modifierProjet', { nomProjet: projet.nomProjet , idProjet: projet.idProjet}]);
  }

}
