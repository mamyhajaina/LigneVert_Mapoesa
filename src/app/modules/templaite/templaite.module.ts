import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplaiteRoutingModule } from './templaite-routing.module';
import { SideBarComponent } from './pages/side-bar/side-bar.component';
import { HeaderComponent } from './pages/header/header.component';


@NgModule({
  declarations: [
    SideBarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    TemplaiteRoutingModule
  ],
  exports: [
    SideBarComponent,
    HeaderComponent
  ]
})
export class TemplaiteModule { }
