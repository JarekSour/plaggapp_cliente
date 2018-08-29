import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipoRoutingModule } from './equipo-routing.module';
import { EquipoComponent } from './equipo/equipo.component';
import { HeaderModule } from '../header/header.module';

@NgModule({
  imports: [
    CommonModule,
    EquipoRoutingModule,
    HeaderModule
  ],
  declarations: [EquipoComponent]
})
export class EquipoModule { }
