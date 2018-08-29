import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowTechComponent } from './show-tech/show-tech.component';
import { AuthGuard } from '../../guards/auth.guard';

const routes: Routes = [
    { path: '', component: ShowTechComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class ShowTechRoutingModule { }
