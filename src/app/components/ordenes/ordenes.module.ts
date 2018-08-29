import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxPaginationModule } from 'ngx-pagination';

import { OrdenesRoutingModule } from './ordenes-routing.module';
import { OrdenesComponent } from './ordenes/ordenes.component';
import { HeaderModule } from '../header/header.module';

@NgModule({
    imports: [
        CommonModule,
        OrdenesRoutingModule,
        HeaderModule,
        NgxPaginationModule
    ],
    declarations: [OrdenesComponent],

})
export class OrdenesModule { }
