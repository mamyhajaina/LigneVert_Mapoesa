import { Appel } from './../../classes/Appel';
import { AppelService } from './../../services/Appel.service';
import { Component, OnInit } from '@angular/core';
import { DataResponse } from 'src/app/modules/templaite/classes/dataResponse';

@Component({
  selector: 'app-ListeAppel',
  templateUrl: './ListeAppel.component.html',
  styleUrls: ['./ListeAppel.component.css']
})
export class ListeAppelComponent implements OnInit {

  appel: Appel[]=[];

  constructor(
    private appelService: AppelService
  ) { }

  ngOnInit() {
    this.getAppelAll();
  }

  getAppelAll(){
    this.appelService.getAppelAll().subscribe(
      (data: DataResponse)=>{
        this.appel=data.contenu as Appel[];
        console.log("appel",this.appel);
        
      }
    );
  }

}
