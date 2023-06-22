import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'utilisateur',
    loadChildren: () =>
      import('./modules/espace-utilisateur/utilisateur.module').then((m) => m.UtilisateurModule),
  },
  {
    path: 'manager',
    loadChildren: () =>
      import('./modules/espace-manager/manager.module').then((m) => m.ManagerModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
