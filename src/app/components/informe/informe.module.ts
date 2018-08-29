import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts/ng2-charts';

import { InformeRoutingModule } from './informe-routing.module';
import { InformeComponent } from './informe/informe.component';
import { HeaderModule } from '../header/header.module';

@NgModule({
    imports: [
        CommonModule,
        InformeRoutingModule,
        HeaderModule,
        ChartsModule
    ],
    declarations: [InformeComponent]
})
export class InformeModule { }
