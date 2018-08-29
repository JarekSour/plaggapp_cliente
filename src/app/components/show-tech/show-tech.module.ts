import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowTechRoutingModule } from './show-tech-routing.module';
import { ShowTechComponent } from './show-tech/show-tech.component';
import { HeaderModule } from '../header/header.module';

@NgModule({
  imports: [
    CommonModule,
    ShowTechRoutingModule,
    HeaderModule
  ],
  declarations: [ShowTechComponent]
})
export class ShowTechModule { }
