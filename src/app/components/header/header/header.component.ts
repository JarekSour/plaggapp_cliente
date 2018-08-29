import { Component, OnInit, NgModule } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css',
        '../../../../assets/css/theme-default/bootstrap.css',
        '../../../../assets/css/theme-default/materialadmin.css',
        '../../../../assets/css/theme-default/font-awesome.min.css',
        '../../../../assets/css/theme-default/material-design-iconic-font.min.css']
})
export class HeaderComponent implements OnInit {

    nombre_empresa: any;
    avatar: any
    menu: boolean = false;

    constructor(
        public authService: AuthService,
        public router: Router
    ) { }

    ngOnInit() {
        this.nombre_empresa = localStorage.getItem('nombre');
        this.avatar = 'https://api.plagapp.cl/cliente/avatar/get?image=' + localStorage.getItem('avatar');
    }

    closeSession() {
        this.authService.closeSession();
        this.router.navigate(['/login']);
    }

}
