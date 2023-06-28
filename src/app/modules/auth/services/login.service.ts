import { Injectable } from '@angular/core';
import { DataResponse } from '../../templaite/classes/dataResponse';
import { environment } from 'src/environments/environments';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

constructor(
  private http: HttpClient,
) { }

login(email: string, mdp: string): any {

  return this.http.get<DataResponse>(
    `${environment.BASE_URL}${environment.CONTEXT_PATH}/utilisateur/login?motsDePasse=${email}&adresseMail=${mdp}`
  );
}

}
