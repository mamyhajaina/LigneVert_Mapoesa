import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataResponse } from '../../templaite/classes/dataResponse';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class VoletService {

  constructor(
    private http: HttpClient,
  ) { }
  
  getVoletByIdProjet(idProjet: any): any {
    return this.http.get<DataResponse>(
      `${environment.BASE_URL}${environment.CONTEXT_PATH}/volet/idProjet?idProjet=${idProjet}`
    );
  }

  getVoletAll(): any {
    return this.http.get<DataResponse>(
      `${environment.BASE_URL}${environment.CONTEXT_PATH}/volet/all`
    );
  }

}
