import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { DataResponse } from 'src/app/modules/templaite/classes/dataResponse';
import { HttpErrorResponse } from '@angular/common/http';
import { Utilisateur } from '../../classes/utilisateur';
import { SessionService } from '../../classes/SessionService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: UntypedFormGroup = this.fb.group({
    email: ['', Validators.required],
    mdp: ['', Validators.required],
  });
  utilisateur: Utilisateur | undefined;

  constructor(
    private fb: UntypedFormBuilder,
    private loginService: LoginService,
    private sessionService: SessionService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm.valueChanges.subscribe((res) => {
      if (res.email != null && res.email.trim() != '') {
      } else {
      }
    });
  }

  login(){
    this.loginService.login(this.loginForm.value.email,this.loginForm.value.mdp).subscribe(
      (data: DataResponse)=>{
        console.log("Login data",data);
        if(data.contenu != null){
          
          this.utilisateur=data.contenu as Utilisateur;
          console.log("Compte Existe",this.utilisateur);
          // Compte Manager
          if(this.utilisateur.idRoleCompte == 1){
            console.log("Compte Manager");
            
            this.sessionService.setSession("manager",JSON.stringify(this.utilisateur));
            this.router.navigate(['/manager']);
          }
          // compte Responsable
          if(this.utilisateur.idRoleCompte == 2){
            console.log("Comte responsable");
            
            this.sessionService.setSession("responsable",JSON.stringify(this.utilisateur));
            this.router.navigate(['/utilisateur']);
          }
        }else{

        }
      
      },(error: HttpErrorResponse) => {
        console.log("error: ",error);
        if (error.status != 401) {
        }
      });
  }

  logout(): void {
  }

}
