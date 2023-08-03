import { Injectable } from '@angular/core';
import { DataResponse } from '../../templaite/classes/dataResponse';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ReponseAppelService {

  constructor(
    private http: HttpClient,
  ) { }

  listeRepportage(idProjet: any): any {
    return this.http.get<DataResponse>(
      `${environment.BASE_URL}${environment.CONTEXT_PATH}/reponseDemande/id?idProjet=${idProjet}`
    );
  }

  listeRepportageNonRepondu(idProjet: any): any {
    return this.http.get<DataResponse>(
      `${environment.BASE_URL}${environment.CONTEXT_PATH}/reponseDemande/nonRepondu?idProjet=${idProjet}`
    );
  }

  reponse(data: any): any {
    return this.http.post<DataResponse>(
      `${environment.BASE_URL}${environment.CONTEXT_PATH}/reponseDemande/update`, data
    );
  }
}
