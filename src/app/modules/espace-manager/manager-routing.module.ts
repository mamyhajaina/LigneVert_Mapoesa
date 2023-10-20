import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerComponent } from './manager.component';
import { PlaintComponent } from './pages/Plaint/Plaint.component';
import { ListRepporatgeComponent } from './pages/list-repporatge/list-repporatge.component';
import { ReponseComponent } from './components/reponse/reponse.component';
import { NotificationComponent } from './pages/Notification/Notification.component';
import { StatistiqueManagerComponent } from './pages/statistiqueManager/statistiqueManager.component';

const routes: Routes = [
  {
    path: '',
    component: ManagerComponent,
    children: [
      {
        path: 'plaint', // child route path
        component: PlaintComponent, // child route component that the router renders
      },
      {
        path: 'ListRepportage', // child route path
        component: ListRepporatgeComponent, // child route component that the router renders
      },
      {
        path: 'notification', // child route path
        component: NotificationComponent, // child route component that the router renders
      },
      {
        path: 'statistique', // child route path
        component: StatistiqueManagerComponent, // child route component that the router renders
      },
      {
        path: 'reponse', // child route path
        component: ReponseComponent, // child route component that the router renders
      },
      {
        path: '',
        redirectTo: 'ListRepportage',
        pathMatch: 'full'
      },
      { path: '**', redirectTo: 'ListRepportage', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
