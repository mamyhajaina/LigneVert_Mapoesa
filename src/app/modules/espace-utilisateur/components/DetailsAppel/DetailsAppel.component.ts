import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppelService } from '../../services/Appel.service';
import { DataResponse } from 'src/app/modules/templaite/classes/dataResponse';
import { Appel } from '../../classes/Appel';
import { ExcelService } from '../../services/excel.service';

@Component({
  selector: 'app-DetailsAppel',
  templateUrl: './DetailsAppel.component.html',
  styleUrls: ['./DetailsAppel.component.css']
})
export class DetailsAppelComponent implements OnInit {

  idAppel: any;
  appel: any[] = [];
  appelItem: Appel = new Appel();
  data: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private appelService: AppelService,
    private excelService: ExcelService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: any) => {
      this.idAppel = params.get('idAppel');
      console.log('idAppel :', this.idAppel);
      this.getAppeById(this.idAppel);
    });
  }

  updateAppel() {
    this.appelItem.idAppel = this.idAppel;
    console.log("appelItem", this.appelItem);

    this.appelService.updateAppel(this.appelItem).subscribe(
      (data: DataResponse) => {
        console.log("Update", data);
        this.getAppeById(this.idAppel);
        this.appelItem = new Appel();
      }
    );
  }

  exportExcel() {
    console.log("this.data", this.data);
    this.excelService.exportToExcel(this.data, 'DetailsAppel_Id' + this.idAppel);
  }

  getAppeById(idAppel: any) {
    this.appelService.getAppelById(idAppel).subscribe(
      (data: DataResponse) => {
        this.appel = data.contenu as any[];
        console.log("appel", this.appel);
        console.log("data.contenu", data.contenu);
        this.data = [{
          Nom_Appelant: this.appel[0].nomAppelant,
          Numero: this.appel[0].numeroAppelant,
          Projet: this.appel[0].projet.nomProjet,
          Region: this.appel[0].region.nomRegion,
          Distrique: this.appel[0].distrique.nomDistrique,
          Volet: this.appel[0].volet.nomVolet,
          Resumer: this.appel[0].resumeAppel
        }];
      }
    );
  }

}
