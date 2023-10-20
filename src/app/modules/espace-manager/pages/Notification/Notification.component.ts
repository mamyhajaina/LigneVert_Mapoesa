import { Component, OnInit } from '@angular/core';
import { ReponseAppelService } from './../../services/reponse-appel.service';
import { Utilisateur } from '../../../auth/classes/utilisateur';
import { Router } from '@angular/router';
import { DataResponse } from 'src/app/modules/templaite/classes/dataResponse';
import { AnyARecord } from 'dns';

@Component({
  selector: 'app-Notification',
  templateUrl: './Notification.component.html',
  styleUrls: ['./Notification.component.css']
})
export class NotificationComponent implements OnInit {


  // pagination
  page: any;
  pageSize: any;
  POSTS: any;
  count: number = 0;
  tableSize: number = 5;

  sessionManager: Utilisateur = new Utilisateur();
  nombreReportageNonRepondu: number = 4;
  reportage: any[] = [];

  constructor(
    private reponseService: ReponseAppelService,
    private router: Router
  ) { }

  ngOnInit() {
    var storedUserString = localStorage.getItem("manager");
    if (storedUserString !== null) {
      this.sessionManager = JSON.parse(storedUserString as any);
      console.log("sessionManager", this.sessionManager);
      this.listeRepportageNonRepondu();
    } else {
      this.router.navigate(["/"]);
    }
  }

  repondre(idAppel: any, resumer: any, idReponseDemande: AnyARecord) {
    console.log("repondre", idAppel);
    this.router.navigate(['/manager/reponse', { idAppel: idAppel, resumer: resumer, idReponseDemande: idReponseDemande }]);
  }

  onTableDataChange(event: any) {
    this.page = event;
  }

  listeRepportageNonRepondu() {
    this.reponseService.listeRepportageNonRepondu(this.sessionManager.idProjet).subscribe(
      (data: DataResponse) => {
        console.log("listeRepportageNonRepondu", data);
        this.reportage = data.contenu as any[];
        this.nombreReportageNonRepondu = this.reportage.length;
        console.log("nombreReportageNonRepondu", this.nombreReportageNonRepondu);

      })
  }

}
