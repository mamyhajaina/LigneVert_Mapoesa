import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilisateurRoutingModule } from './utilisateur-routing.module';
import { UtilisateurComponent } from './utilisateur.component';
import { StatistiqueComponent } from './pages/statistique/statistique.component';
import { TemplaiteModule } from '../templaite/templaite.module';


@NgModule({
  declarations: [
    UtilisateurComponent,
    StatistiqueComponent
  ],
  imports: [
    CommonModule,
    UtilisateurRoutingModule,
    TemplaiteModule
  ]
})
export class UtilisateurModule { }
