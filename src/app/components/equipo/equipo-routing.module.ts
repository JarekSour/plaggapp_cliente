import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EquipoComponent } from './equipo/equipo.component';
import { AuthGuard } from '../../guards/auth.guard';

const routes: Routes = [
    { path: '', component: EquipoComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class EquipoRoutingModule { }
