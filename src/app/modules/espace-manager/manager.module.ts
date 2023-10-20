import { ReponseAppelService } from './services/reponse-appel.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerComponent } from './manager.component';
import { TemplaiteModule } from '../templaite/templaite.module';
import { ListRepporatgeComponent } from './pages/list-repporatge/list-repporatge.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReponseComponent } from './components/reponse/reponse.component';
import { FormsModule } from '@angular/forms';
import { NotificationComponent } from './pages/Notification/Notification.component';
import { StatistiqueManagerComponent } from './pages/statistiqueManager/statistiqueManager.component';


@NgModule({
  declarations: [
    ManagerComponent,
    ListRepporatgeComponent,
    ReponseComponent,
    NotificationComponent,
    StatistiqueManagerComponent
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    ManagerRoutingModule,
    TemplaiteModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [
    ReponseAppelService
  ]
})
export class ManagerModule { }
