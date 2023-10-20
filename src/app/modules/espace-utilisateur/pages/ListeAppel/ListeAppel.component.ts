import { ExcelService } from './../../services/excel.service';
import { Router } from '@angular/router';
import { Appel } from './../../classes/Appel';
import { AppelService } from './../../services/Appel.service';
import { Component, OnInit } from '@angular/core';
import { DataResponse } from 'src/app/modules/templaite/classes/dataResponse';
import * as XLSX from 'xlsx';
import { Utilisateur } from '../../../auth/classes/utilisateur';

@Component({
  selector: 'app-ListeAppel',
  templateUrl: './ListeAppel.component.html',
  styleUrls: ['./ListeAppel.component.css']
})
export class ListeAppelComponent implements OnInit {

  // pagination
  page: any;
  pageSize: any;
  POSTS: any;
  count: number = 0;
  tableSize: number = 5;

  appel: Appel[] = [];
  appels: Appel[] = [];
  appelItem: Appel = new Appel();
  recherche: any;
  sessionManager: Utilisateur = new Utilisateur();

  constructor(
    private appelService: AppelService,
    private router: Router,
    private excelService: ExcelService
  ) { }

  ngOnInit() {
    var storedUserString = localStorage.getItem("responsable");
    if (storedUserString !== null) {
      this.sessionManager = JSON.parse(storedUserString as any);
      console.log("sessionManager", this.sessionManager);
    } else {
      this.router.navigate(["/"]);
    }
    this.getAppelAll();
  }

  envoyer(idAppel: any) {
    this.appelService.envoyerAppel(idAppel, this.sessionManager.idUtiliateur).subscribe(
      (data: DataResponse) => {
        console.log("envoyer", data);
        this.getAppelAll();
      });
  }

  exportToExcel(): void {
    this.excelService.exportToExcel(this.appel, 'appels');
  }

  onTableDataChange(event: any) {
    this.page = event;
  }

  navigateRoute(idAppel: any) {
    this.router.navigate(['utilisateur/detailsAppel', { idAppel: idAppel }]);
  }

  rechercheData() {
    console.log("recherche", this.recherche);
    if (this.recherche && this.recherche.trim() != '') {
      this.appel = this.appels.filter((item: Appel) => {
        return (
          (item.numeroAppelant || '').toLowerCase().indexOf(this.recherche.toLowerCase()) > -1
        );
      });
    }
    if (this.recherche.trim() == '' || this.recherche.trim() == null) {
      this.appel = this.appels;
    }
  }

  deleteAppel(idAppel: any) {
    this.appelService.deleteAppel(idAppel).subscribe(
      (data: DataResponse) => {
        console.log("delete", data);
        this.getAppelAll();
      })
  }

  getAppelAll() {
    this.appelService.getAppelAll().subscribe(
      (data: DataResponse) => {
        this.appel = data.contenu as Appel[];
        this.appels = data.contenu as Appel[];
        console.log("appel", this.appel);
        console.log("data.contenu", data.contenu);
      }
    );
  }

}
