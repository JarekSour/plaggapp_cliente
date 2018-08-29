import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificadoRoutingModule } from './certificado-routing.module';
import { CertificadoComponent } from './certificado/certificado.component';
import { HeaderModule } from '../header/header.module';

@NgModule({
  imports: [
    CommonModule,
    CertificadoRoutingModule,
    HeaderModule
  ],
  declarations: [CertificadoComponent]
})
export class CertificadoModule { }
