import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CertificadoComponent } from './certificado/certificado.component';
import { AuthGuard } from '../../guards/auth.guard';

const routes: Routes = [
    { path: '', component: CertificadoComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class CertificadoRoutingModule { }
