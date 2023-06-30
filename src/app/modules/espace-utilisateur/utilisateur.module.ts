import { AppelService } from './services/Appel.service';
import { RegionService } from './services/Region.service';
import { VoletService } from './services/Volet.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilisateurRoutingModule } from './utilisateur-routing.module';
import { UtilisateurComponent } from './utilisateur.component';
import { StatistiqueComponent } from './pages/statistique/statistique.component';
import { TemplaiteModule } from '../templaite/templaite.module';
import { ProjetService } from './services/Projet.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EnregistrementAppelComponent } from './pages/EnregistrementAppel/EnregistrementAppel.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ActiviteService } from './services/Activite.service';
import { DetailsActiviteService } from './services/DetailsActivite.service';
import { DistriqueService } from './services/Distrique.service';
import { ListeAppelComponent } from './pages/ListeAppel/ListeAppel.component';


@NgModule({
  declarations: [
    UtilisateurComponent,
    StatistiqueComponent,
    EnregistrementAppelComponent,
    ListeAppelComponent
  ],
  imports: [
    CommonModule,
    UtilisateurRoutingModule,
    TemplaiteModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [
    ProjetService,
    VoletService,
    ActiviteService,
    DetailsActiviteService,
    RegionService,
    DistriqueService,
    AppelService
  ]
})
export class UtilisateurModule { }
