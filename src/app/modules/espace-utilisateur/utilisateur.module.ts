import { ExcelService } from './services/excel.service';
import { AppelService } from './services/Appel.service';
import { RegionService } from './services/Region.service';
import { VoletService } from './services/Volet.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilisateurRoutingModule } from './utilisateur-routing.module';
import { UtilisateurComponent } from './utilisateur.component';
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
import { NouveauProjetComponent } from './pages/NouveauProjet/NouveauProjet.component';
import { ListeProjetComponent } from './pages/ListeProjet/ListeProjet.component';
import { ModifierProjetItemComponent } from './components/modifierProjet-Item/modifierProjet-Item.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UtlisateurService } from './services/utlisateur.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DetailsAppelComponent } from './components/DetailsAppel/DetailsAppel.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { StatistiqueComponent } from './pages/statistique/statistique.component';


@NgModule({
  declarations: [
    UtilisateurComponent,
    StatistiqueComponent,
    EnregistrementAppelComponent,
    ListeAppelComponent,
    NouveauProjetComponent,
    ListeProjetComponent,
    ModifierProjetItemComponent,
    DetailsAppelComponent
  ],
  imports: [
    CommonModule,
    UtilisateurRoutingModule,
    TemplaiteModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NgxPaginationModule
  ],
  providers: [
    ProjetService,
    VoletService,
    ActiviteService,
    DetailsActiviteService,
    RegionService,
    DistriqueService,
    AppelService,
    UtlisateurService,
    ExcelService
  ]
})
export class UtilisateurModule { }
