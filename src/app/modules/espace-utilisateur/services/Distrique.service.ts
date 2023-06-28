import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataResponse } from '../../templaite/classes/dataResponse';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class DistriqueService {

  constructor(
    private http: HttpClient,
  ) { }
  
  getDistriqueByIdRegion(idRegion: any): any {
    return this.http.get<DataResponse>(
      `${environment.BASE_URL}${environment.CONTEXT_PATH}/distrique/idRegion?idRegion=${idRegion}`
    );
  }

}
