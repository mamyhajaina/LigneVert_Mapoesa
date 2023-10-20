import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataResponse } from '../../templaite/classes/dataResponse';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class UtlisateurService {

  constructor(
    private http: HttpClient,
  ) { }

  insertUtlisateru(data: any){
    return this.http.post<DataResponse>(
      `${environment.BASE_URL}${environment.CONTEXT_PATH}/utilisateur/insert`, data
    );
  }
}
