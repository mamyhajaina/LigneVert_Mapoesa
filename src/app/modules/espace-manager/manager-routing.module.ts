import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerComponent } from './manager.component';
import { PlaintComponent } from './pages/Plaint/Plaint.component';

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
        path: 'ListePlaint', // child route path
        component: PlaintComponent, // child route component that the router renders
      },
      {
        path: '',
        redirectTo: 'ListePlaint',
        pathMatch: 'full'
      },
      { path: '**', redirectTo: 'ListePlaint', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
