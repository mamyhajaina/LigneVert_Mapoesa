import { ReponseAppelService } from './../../services/reponse-appel.service';
import { Component } from '@angular/core';
import { Utilisateur } from '../../../auth/classes/utilisateur';
import { Router } from '@angular/router';
import { DataResponse } from 'src/app/modules/templaite/classes/dataResponse';
import { AnyARecord } from 'dns';

@Component({
  selector: 'app-list-repporatge',
  templateUrl: './list-repporatge.component.html',
  styleUrls: ['./list-repporatge.component.css']
})
export class ListRepporatgeComponent {

  // pagination
  page: any;
  pageSize: any;
  POSTS: any;
  count: number = 0;
  tableSize: number = 5;

  sessionManager: Utilisateur = new Utilisateur();

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
      this.listeRepportage();
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

  listeRepportage() {
    this.reponseService.listeRepportage(this.sessionManager.idProjet).subscribe(
      (data: DataResponse) => {
        console.log("listeRepportage", data);
        this.reportage = data.contenu as any[];
      })
  }

}
