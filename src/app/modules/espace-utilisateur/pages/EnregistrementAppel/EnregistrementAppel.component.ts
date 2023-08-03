import { DistriqueService } from './../../services/Distrique.service';
import { Region } from './../../classes/Region';
import { RegionService } from './../../services/Region.service';
import { DetailsActivite } from './../../classes/DetailsActivite';
import { DetailsActiviteService } from './../../services/DetailsActivite.service';
import { Volet } from './../../classes/Volet';
import { VoletService } from './../../services/Volet.service';
import { Component, OnInit } from '@angular/core';
import { ProjetService } from '../../services/Projet.service';
import { DataResponse } from 'src/app/modules/templaite/classes/dataResponse';
import { Projet } from '../../classes/Projet';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActiviteService } from '../../services/Activite.service';
import { Activites } from '../../classes/Activites';
import { Distrique } from '../../classes/Distrique';
import { Appel } from '../../classes/Appel';
import { NgForm } from '@angular/forms';
import { AppelService } from '../../services/Appel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-EnregistrementAppel',
  templateUrl: './EnregistrementAppel.component.html',
  styleUrls: ['./EnregistrementAppel.component.css']
})
export class EnregistrementAppelComponent implements OnInit {

  projet: Projet[] = [];
  selectedProjetId: number = 0;
  selectedVoletId: number = 0;
  selectedActiviteId: number = 0;
  selectedRegionId: number = 0;
  selectedDetailsActiviteId: number = 0;
  selectedCategorieAppelId: number = 0;
  selectedDistriqueId: number = 0;
  nomAppelant: string = "";
  numeroAppelant: string = "";
  sexe: string = "";
  resumer: string = "";
  categireSocio: string = "";
  date: Date | undefined;

  volet: Volet[] = [];
  activite: Activites[] = [];
  detailsActivite: DetailsActivite[] = [];
  region: Region[] = [];
  distrique: Distrique[] = [];
  appelEnregistrer: Appel = new Appel();

  constructor(
    private projeService: ProjetService,
    private spinnerService: NgxSpinnerService,
    private voletService: VoletService,
    private activiteService: ActiviteService,
    private detailsActiviteService: DetailsActiviteService,
    private regionService: RegionService,
    private distriqueService: DistriqueService,
    private appelService: AppelService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getProjetAll();
  }

  getProjetAll() {
    this.projeService.projetAll().subscribe(
      (data: DataResponse) => {
        this.projet = data.contenu as Projet[];
      }
    );
  }

  enregistrementAppel(form: NgForm) {
    console.log("this.selectedCategorieAppelId: ", this.selectedCategorieAppelId);
    console.log("this.selectedProjetId:", this.selectedProjetId);

    this.appelEnregistrer.idProjet = this.selectedProjetId !== 0 ? this.selectedProjetId : null;
    this.appelEnregistrer.idVolet = this.selectedVoletId !== 0 ? this.selectedVoletId : null;
    this.appelEnregistrer.idActivites = this.selectedActiviteId !== 0 ? this.selectedActiviteId : null;
    this.appelEnregistrer.idDetailsActivites = this.selectedDetailsActiviteId !== 0 ? this.selectedDetailsActiviteId : null;
    this.appelEnregistrer.idRegion = this.selectedRegionId !== 0 ? this.selectedRegionId : null;
    this.appelEnregistrer.idDistrique = this.selectedDistriqueId !== 0 ? this.selectedDistriqueId : null;
    this.appelEnregistrer.idCategireAppel = this.selectedCategorieAppelId !== 0 ? this.selectedCategorieAppelId : null;
    this.appelEnregistrer.nomAppelant = this.nomAppelant;
    this.appelEnregistrer.numeroAppelant = this.numeroAppelant;
    this.appelEnregistrer.sexe = this.sexe;
    this.appelEnregistrer.resumeAppel = this.resumer;
    this.appelEnregistrer.categorieSocioProAppelant = this.categireSocio;
    this.appelEnregistrer.dateAppel = this.date;
    this.appelEnregistrer.idUtiliateur = 3;

    console.log("appelEnregistrer", this.appelEnregistrer);

    this.appelService.insertAppel(this.appelEnregistrer).subscribe(
      (data: DataResponse) => {
        console.log("insertAppel", data);
        this.router.navigate(['utilisateur/listeAppel']);
      });
  }

  getDistriqueByIdRegion(idRegion: any) {
    this.distriqueService.getDistriqueByIdRegion(idRegion).subscribe(
      (data: DataResponse) => {
        this.distrique = data.contenu as Distrique[];
        this.spinnerService.hide("spinnerLocalisation");
        console.log("distrique", this.distrique);

      }
    );
  }

  getRegionByIdProjet(idProjet: any) {
    this.regionService.getRegionByIdProjet(idProjet).subscribe(
      (data: DataResponse) => {
        this.region = data.contenu as Region[];
        this.spinnerService.hide("spinnerLocalisation");
        console.log("region", this.region);

      }
    );
  }

  getVoletByIdProjet(idProjet: any) {
    this.voletService.getVoletByIdProjet(idProjet).subscribe(
      (data: DataResponse) => {
        this.volet = data.contenu as Volet[];
        this.spinnerService.hide("spinnerClassification");
        console.log("volet", this.volet);

      }
    );
  }

  getActiviteByIdVolet(idVolet: any) {
    this.activiteService.getActiviteByIdVolet(idVolet).subscribe(
      (data: DataResponse) => {
        this.activite = data.contenu as Activites[];
        this.spinnerService.hide("spinnerClassification");
        console.log("activite", this.activite);

      }
    );
  }

  getDetailsActiviteByIdActivite(idActivite: any) {
    this.detailsActiviteService.getDetailsActiviteByIdActivite(idActivite).subscribe(
      (data: DataResponse) => {
        this.detailsActivite = data.contenu as DetailsActivite[];
        this.spinnerService.hide("spinnerClassification");
        console.log("detailsActivite", this.detailsActivite);

      }
    );
  }


  onProjetSelectionChanged(): void {
    this.spinnerService.show("spinnerClassification");
    this.getVoletByIdProjet(this.selectedProjetId);
    this.spinnerService.show("spinnerLocalisation");
    this.getRegionByIdProjet(this.selectedProjetId);
  }

  onVoletSelectionChanged(): void {
    this.spinnerService.show("spinnerClassification");
    this.getActiviteByIdVolet(this.selectedVoletId);
  }

  onActiviteSelectionChanged(): void {
    this.spinnerService.show("spinnerClassification");
    this.getDetailsActiviteByIdActivite(this.selectedActiviteId);
  }

  onRegionSelectionChanged(): void {
    this.spinnerService.show("spinnerLocalisation");
    this.getDistriqueByIdRegion(this.selectedRegionId);
  }

}
