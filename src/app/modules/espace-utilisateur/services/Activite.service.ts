import { Injectable } from '@angular/core';
import { DataResponse } from '../../templaite/classes/dataResponse';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ActiviteService {

  constructor(
    private http: HttpClient,
  ) { }
  
  getActiviteByIdVolet(idVolet: any): any {
    return this.http.get<DataResponse>(
      `${environment.BASE_URL}${environment.CONTEXT_PATH}/activite/idVolet?idVolet=${idVolet}`
    );
  }

}
