import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataResponse } from '../../templaite/classes/dataResponse';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class DetailsActiviteService {

  constructor(
    private http: HttpClient,
  ) { }
  
  getDetailsActiviteByIdActivite(idActivite: any): any {
    return this.http.get<DataResponse>(
      `${environment.BASE_URL}${environment.CONTEXT_PATH}/detailsActivite/idActivite?idActivite=${idActivite}`
    );
  }

  getDetailsActiviteAll(): any {
    return this.http.get<DataResponse>(
      `${environment.BASE_URL}${environment.CONTEXT_PATH}/detailsActivite/all`
    );
  }

}
