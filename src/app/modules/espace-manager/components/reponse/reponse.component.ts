import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ReponseAppelService } from '../../services/reponse-appel.service';
import { DataResponse } from 'src/app/modules/templaite/classes/dataResponse';
import { Utilisateur } from 'src/app/modules/auth/classes/utilisateur';

@Component({
  selector: 'app-reponse',
  templateUrl: './reponse.component.html',
  styleUrls: ['./reponse.component.css']
})
export class ReponseComponent implements OnInit {

  idAppel: number = 0;
  resumer: any = "";
  idReponseDemande: number = 0;
  idStatus: number = 0;
  intervention: any = "";
  constatResolution: any = "";
  reponse: any = "";
  sessionManager: Utilisateur = new Utilisateur();


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reponseService: ReponseAppelService
  ) { }

  ngOnInit() {
    var storedUserString = localStorage.getItem("manager");
    if (storedUserString !== null) {
      this.sessionManager = JSON.parse(storedUserString as any);
      console.log("sessionManager", this.sessionManager);
    } else {
      this.router.navigate(["/"]);
    }
    this.route.paramMap.subscribe((params: any) => {
      this.idAppel = params.get('idAppel');
      this.resumer = params.get('resumer');
      this.idReponseDemande = params.get('idReponseDemande');
    });
    console.log("id appel", this.idAppel);
  }

  reponseEnvoyer() {
    let data = {
      idReponseDemande: this.idReponseDemande,
      idAppel: this.idAppel,
      idstatut: this.idStatus,
      reponse: true,
      vu: true,
      idUtiliateur: this.sessionManager.idUtiliateur,
      reponseDemande: true,
      intervention: this.intervention,
      constatResolution: this.constatResolution
    }
    console.log("data", data);
    this.reponseService.reponse(data).subscribe(
      (response: DataResponse) => {
        console.log("data reponse", response);
        this.router.navigate(['/manager/notification']);
      }
    )
  }

}
