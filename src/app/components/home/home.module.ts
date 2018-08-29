import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'angular-calendar';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderModule } from '../header/header.module';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        CalendarModule.forRoot(),
        HeaderModule
    ],
    declarations: [HomeComponent]
})
export class HomeModule { }
