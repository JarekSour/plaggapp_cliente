import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdenesComponent } from './ordenes/ordenes.component';
import { AuthGuard } from '../../guards/auth.guard';

const routes: Routes = [
    { path: '', component: OrdenesComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class OrdenesRoutingModule { }
