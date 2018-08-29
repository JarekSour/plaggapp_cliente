import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowPuntoComponent } from './show-punto/show-punto.component';
import { AuthGuard } from '../../guards/auth.guard';

const routes: Routes = [
    { path: '', component: ShowPuntoComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class ShowPuntoRoutingModule { }
