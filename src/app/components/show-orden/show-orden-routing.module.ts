import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowOrdenComponent } from './show-orden/show-orden.component';
import { AuthGuard } from '../../guards/auth.guard';

const routes: Routes = [
    { path: '', component: ShowOrdenComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class ShowOrdenRoutingModule { }
