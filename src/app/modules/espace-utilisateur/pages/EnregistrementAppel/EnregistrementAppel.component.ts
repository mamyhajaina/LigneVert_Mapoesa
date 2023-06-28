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

@Component({
  selector: 'app-EnregistrementAppel',
  templateUrl: './EnregistrementAppel.component.html',
  styleUrls: ['./EnregistrementAppel.component.css']
})
export class EnregistrementAppelComponent implements OnInit {

  projet: Projet[]=[];
  selectedProjetId: number | undefined;
  selectedVoletId: number | undefined;
  selectedActivite: number | undefined;
  selectedRegion: number | undefined;
  volet: Volet[]=[];
  activite: Activites[]=[];
  detailsActivite: DetailsActivite[]=[];
  region: Region[]=[];
  distrique: Distrique[]=[];

  constructor(
    private projeService: ProjetService,
    private spinnerService: NgxSpinnerService,
    private voletService: VoletService,
    private activiteService: ActiviteService,
    private detailsActiviteService: DetailsActiviteService,
    private regionService: RegionService,
    private distriqueService: DistriqueService
  ) { }

  ngOnInit() {
    this.getProjetAll();
  }

  getProjetAll(){
    this.projeService.projetAll().subscribe(
      (data: DataResponse)=>{
        this.projet=data.contenu as Projet[];
      }
    );
  }

  getDistriqueByIdRegion(idRegion: any){
    this.distriqueService.getDistriqueByIdRegion(idRegion).subscribe(
      (data: DataResponse)=>{
        this.distrique = data.contenu as Distrique[];
        this.spinnerService.hide("spinnerLocalisation");
        console.log("distrique",this.distrique);
        
      }
    );
  }

  getRegionByIdProjet(idProjet: any){
    this.regionService.getRegionByIdProjet(idProjet).subscribe(
      (data: DataResponse)=>{
        this.region = data.contenu as Region[];
        this.spinnerService.hide("spinnerLocalisation");
        console.log("region",this.region);
        
      }
    );
  }

  getVoletByIdProjet(idProjet: any){
    this.voletService.getVoletByIdProjet(idProjet).subscribe(
      (data: DataResponse)=>{
        this.volet = data.contenu as Volet[];
        this.spinnerService.hide("spinnerClassification");
        console.log("volet",this.volet);
        
      }
    );
  }

  getActiviteByIdVolet(idVolet: any){
    this.activiteService.getActiviteByIdVolet(idVolet).subscribe(
      (data: DataResponse)=>{
        this.activite = data.contenu as Activites[];
        this.spinnerService.hide("spinnerClassification");
        console.log("activite",this.activite);
        
      }
    );
  }

  getDetailsActiviteByIdActivite(idActivite: any){
    this.detailsActiviteService.getDetailsActiviteByIdActivite(idActivite).subscribe(
      (data: DataResponse)=>{
        this.detailsActivite = data.contenu as DetailsActivite[];
        this.spinnerService.hide("spinnerClassification");
        console.log("detailsActivite",this.detailsActivite);
        
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
    this.getDetailsActiviteByIdActivite(this.selectedActivite);
  }

  onRegionSelectionChanged(): void {
    this.spinnerService.show("spinnerLocalisation");
    this.getDistriqueByIdRegion(this.selectedRegion);
  }

}
