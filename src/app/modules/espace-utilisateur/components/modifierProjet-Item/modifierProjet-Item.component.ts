import { Component, OnInit } from '@angular/core';
import { DistriqueService } from './../../services/Distrique.service';
import { Region } from './../../classes/Region';
import { RegionService } from './../../services/Region.service';
import { DetailsActivite } from './../../classes/DetailsActivite';
import { DetailsActiviteService } from './../../services/DetailsActivite.service';
import { Volet } from './../../classes/Volet';
import { VoletService } from './../../services/Volet.service';
import { ProjetService } from '../../services/Projet.service';
import { DataResponse } from 'src/app/modules/templaite/classes/dataResponse';
import { Projet } from '../../classes/Projet';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActiviteService } from '../../services/Activite.service';
import { Activites } from '../../classes/Activites';
import { Distrique } from '../../classes/Distrique';

@Component({
  selector: 'app-modifierProjet-Item',
  templateUrl: './modifierProjet-Item.component.html',
  styleUrls: ['./modifierProjet-Item.component.css']
})
export class ModifierProjetItemComponent implements OnInit {

  idprojet: any = 1;
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
    this.getVoletAll();
    this.getActiviteAll();
    this.getRegionAll();
    this.getDistriqueAll();
    this.getDetailsActiviteAll();
  }

  getProjetAll(){
    this.projeService.projetAll().subscribe(
      (data: DataResponse)=>{
        this.projet=data.contenu as Projet[];
      }
    );
  }

  getDistriqueAll(){
    this.distriqueService.getDistriqueAll().subscribe(
      (data: DataResponse)=>{
        this.distrique = data.contenu as Distrique[];
        console.log("distrique",this.distrique);
        
      }
    );
  }

  getRegionAll(){
    this.regionService.getRegionAll().subscribe(
      (data: DataResponse)=>{
        this.region = data.contenu as Region[];
        console.log("region",this.region);
        
      }
    );
  }

  getVoletAll(){
    this.voletService.getVoletAll().subscribe(
      (data: DataResponse)=>{
        this.volet = data.contenu as Volet[];
        console.log("volet",this.volet);
        
      }
    );
  }

  getActiviteAll(){
    this.activiteService.getActiviteAll().subscribe(
      (data: DataResponse)=>{
        this.activite = data.contenu as Activites[];
        console.log("activite",this.activite);
        
      }
    );
  }

  getDetailsActiviteAll(){
    this.detailsActiviteService.getDetailsActiviteAll().subscribe(
      (data: DataResponse)=>{
        this.detailsActivite = data.contenu as DetailsActivite[];
        console.log("detailsActivite",this.detailsActivite);
        
      }
    );
  }



}
