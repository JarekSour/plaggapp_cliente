import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', loadChildren: 'app/components/login/login.module#LoginModule' },
    { path: 'home', loadChildren: 'app/components/home/home.module#HomeModule' },
    { path: 'ordenes', loadChildren: 'app/components/ordenes/ordenes.module#OrdenesModule' },
    { path: 'mapa/:id', loadChildren: 'app/components/mapa/mapa.module#MapaModule' },
    { path: 'certificados', loadChildren: 'app/components/certificado/certificado.module#CertificadoModule' },
    { path: 'orden/detalle/:id', loadChildren: 'app/components/show-orden/show-orden.module#ShowOrdenModule' },
    { path: 'orden/punto/:id', loadChildren: 'app/components/show-punto/show-punto.module#ShowPuntoModule' },
    { path: 'contact', loadChildren: 'app/components/contact/contact.module#ContactModule' },
    { path: 'equipo', loadChildren: 'app/components/equipo/equipo.module#EquipoModule' },
    { path: 'tecnico/:id', loadChildren: 'app/components/show-tech/show-tech.module#ShowTechModule' },
    { path: 'informe', loadChildren: 'app/components/informe/informe.module#InformeModule' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
