import { Injectable } from '@angular/core';
import { DataResponse } from '../../templaite/classes/dataResponse';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AppelService {

  constructor(
    private http: HttpClient,
  ) { }

  envoyerAppel(idAppel: any,idUtiliateur: any): any {
    return this.http.get<DataResponse>(
      `${environment.BASE_URL}${environment.CONTEXT_PATH}/appel/envoyer?idAppel=${idAppel}&idUtiliateur=${idUtiliateur}`
    );
  }
  
  getAppelAll(): any {
    return this.http.get<DataResponse>(
      `${environment.BASE_URL}${environment.CONTEXT_PATH}/appel/all`
    );
  }

  getAppelById(idAppel: any): any {
    return this.http.get<DataResponse>(
      `${environment.BASE_URL}${environment.CONTEXT_PATH}/appel/idAppel?idAppel=${idAppel}`
    );
  }

  insertAppel(data: any){
    return this.http.post<DataResponse>(
      `${environment.BASE_URL}${environment.CONTEXT_PATH}/appel/inserte`, data
    );
  }

  deleteAppel(idAppel: any){
    return this.http.get<DataResponse>(
      `${environment.BASE_URL}${environment.CONTEXT_PATH}/appel/delete/id?idAppel=${idAppel}`
    );
  }

  updateAppel(data: any){
    return this.http.post<DataResponse>(
      `${environment.BASE_URL}${environment.CONTEXT_PATH}/appel/update`, data
    );
  }

}
