import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataResponse } from '../../templaite/classes/dataResponse';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  constructor(
    private http: HttpClient,
  ) { }
  
  projetAll(): any {
    return this.http.get<DataResponse>(
      `${environment.BASE_URL}${environment.CONTEXT_PATH}/projet/all`
    );
  }

}
