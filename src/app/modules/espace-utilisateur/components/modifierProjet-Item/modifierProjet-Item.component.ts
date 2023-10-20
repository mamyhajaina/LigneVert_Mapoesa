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
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PopupChampInputComponent } from '../popupChampInput/popupChampInput.component';

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
  projetModifier: Projet = new Projet();

  constructor(
    private projeService: ProjetService,
    private spinnerService: NgxSpinnerService,
    private voletService: VoletService,
    private activiteService: ActiviteService,
    private detailsActiviteService: DetailsActiviteService,
    private regionService: RegionService,
    private distriqueService: DistriqueService,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: any) => {
      this.projetModifier.nomProjet = params.get('nomProjet');
      this.projetModifier.idProjet = params.get('idProjet');
      console.log('projet :', this.projetModifier);
    });
    this.getVoletByIdProjet(this.projetModifier.idProjet);
    this.getRegionByIdProjet(this.projetModifier.idProjet);
    this.getDistriqueAll();
  }

  openPopupClasification(): void {
    // const dialogRef = this.dialog.open(PopupChampInputComponent, {
    //   data: {name: "test", animal: "this.animal"},
    //   width: '300px',
    //   panelClass: 'custom-dialog'
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   console.log('result',result);
      
    // });
  }

  getDetailsActiviteByIdActivite(idActivite: any){
    this.detailsActiviteService.getDetailsActiviteByIdActivite(idActivite).subscribe(
      (data: DataResponse)=>{
        this.detailsActivite = data.contenu as DetailsActivite[];
        console.log("detailsActivite",this.detailsActivite);
        
      }
    );
  }

  getActiviteByIdVolet(idVolet: any){
    this.activiteService.getActiviteByIdVolet(idVolet).subscribe(
      (data: DataResponse)=>{
        this.activite = data.contenu as Activites[];
        console.log("activite",this.activite);
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

  getRegionByIdProjet(idProjet: any){
    this.regionService.getRegionByIdProjet(idProjet).subscribe(
      (data: DataResponse)=>{
        this.region = data.contenu as Region[];
        console.log("region",this.region);
      }
    );
  }

  getVoletByIdProjet(idProjet: any){
    this.voletService.getVoletByIdProjet(idProjet).subscribe(
      (data: DataResponse)=>{
        this.volet = data.contenu as Volet[];
        console.log("volet",this.volet);
      }
    );
  }



}
