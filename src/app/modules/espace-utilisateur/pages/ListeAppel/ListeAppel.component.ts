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
  appelItem: Appel = new Appel();

  constructor(
    private appelService: AppelService
  ) { }

  ngOnInit() {
    this.getAppelAll();
  }

  deleteAppel(idAppel: any){
    this.appelService.deleteAppel(idAppel).subscribe(
      (data: DataResponse)=>{
        console.log("delete",data);
        this.getAppelAll();
      })
  }

  getAppelAll(){
    this.appelService.getAppelAll().subscribe(
      (data: DataResponse)=>{
        this.appel=data.contenu as Appel[];
        console.log("appel",this.appel);
        console.log("data.contenu",data.contenu);
      }
    );
  }

  updateAppel(idAppel: any){
    this.appelItem.idAppel =  idAppel;
    console.log("appelItem",this.appelItem);
    
    this.appelService.updateAppel(this.appelItem).subscribe(
      (data: DataResponse)=>{
        console.log("Update",data);
      }
    )
  }

}
