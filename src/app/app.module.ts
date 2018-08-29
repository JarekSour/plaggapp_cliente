import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthService } from './service/auth.service';
import { OrdenService } from './service/orden.service';
import { ExcelService } from './service/excel.service';
import { PuntoService } from './service/punto.service';
import { TecnicoService } from './service/tecnico.service';
import { ClienteService } from './service/cliente.service';
import { AdminService } from './service/admin.service';
import { DocumentoService } from './service/documento.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [AuthService, ExcelService, OrdenService, PuntoService, TecnicoService, ClienteService, AdminService, DocumentoService],
    bootstrap: [AppComponent]
})
export class AppModule { }
