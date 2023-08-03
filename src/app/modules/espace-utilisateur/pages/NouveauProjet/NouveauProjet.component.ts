import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Utilisateur } from '../../classes/Utilisateur';
import { Projet } from '../../classes/Projet';
import { UtlisateurService } from '../../services/utlisateur.service';
import { DataResponse } from 'src/app/modules/templaite/classes/dataResponse';
import { ProjetService } from '../../services/Projet.service';

@Component({
  selector: 'app-NouveauProjet',
  templateUrl: './NouveauProjet.component.html',
  styleUrls: ['./NouveauProjet.component.css']
})
export class NouveauProjetComponent implements OnInit {

  utilisateur: Utilisateur = new Utilisateur();
  projet: Projet = new Projet();

  constructor(
    private router: Router,
    private utlisateurService: UtlisateurService,
    private projetService: ProjetService
  ) { }

  ngOnInit() {
  }

  insertUtilisateur(data: Utilisateur) {
    this.utlisateurService.insertUtlisateru(data).subscribe(
      (data: DataResponse) => {
        console.log("insertUtilisateur", data);
      }
    )
  }

  insertProjet(form: NgForm) {
    console.log("this.projet", this.projet);
    this.projetService.insertProjet(this.projet).subscribe(
      (data: DataResponse) => {
        console.log("insertProjet", data);
        this.utilisateur.idProjet = data.contenu.idProjet;
        console.log("Utilisateur", this.utilisateur);
        this.insertUtilisateur(this.utilisateur);
        this.router.navigate(['utilisateur/EnregistrementAppel']);
        //this.router.navigate(['/utilisateur/modifierProjet', { nomProjet: data.contenu.nomProjet , idProjet: data.contenu.idProjet}]);
      }
    );

  }




}
