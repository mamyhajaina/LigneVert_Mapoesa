import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtilisateurComponent } from './utilisateur.component';
import { StatistiqueComponent } from './pages/statistique/statistique.component';
import { EnregistrementAppelComponent } from './pages/EnregistrementAppel/EnregistrementAppel.component';
import { ListeAppelComponent } from './pages/ListeAppel/ListeAppel.component';

const routes: Routes = [
  {
    path: '',
    component: UtilisateurComponent,
    children: [
      {
        path: 'statistique', // child route path
        component: StatistiqueComponent, // child route component that the router renders
      },
      {
        path: 'EnregistrementAppel', // child route path
        component: EnregistrementAppelComponent, // child route component that the router renders
      },
      {
        path: 'listeAppel', // child route path
        component: ListeAppelComponent, // child route component that the router renders
      },
      {
        path: '',
        redirectTo: 'statistique',
        pathMatch: 'full'
      },
      { path: '**', redirectTo: 'statistique', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilisateurRoutingModule { }
