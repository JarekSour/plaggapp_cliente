import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service';
import { ClienteService } from '../../../service/cliente.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css',
        '../../../../assets/css/theme-default/bootstrap.css',
        '../../../../assets/css/theme-default/materialadmin.css',
        '../../../../assets/css/theme-default/font-awesome.min.css',
        '../../../../assets/css/theme-default/material-design-iconic-font.min.css']
})
export class LoginComponent implements OnInit {

    loginData = { rut: '', pass: '' };
    error: any;

    constructor(
        public clienteService: ClienteService,
        public authService: AuthService,
        public router: Router,
    ) { }

    ngOnInit() {
    }

    doLogin() {
        this.authService.login(this.loginData).then((response) => {
            if (response['status'] == true) {
                this.clienteService.getCliente({ token: response['token'], user: 'client' }).then((res) => {
                    localStorage.setItem('nombre', res['data']['nombre_empresa']);
                    localStorage.setItem('avatar', res['data']['avatar']);
                    localStorage.setItem('token', response['token']);
                    this.router.navigate(['/home']);
                })
            } else if (response['data'] == 'licence_expired') {
                this.error = 'Ups! ocurrió un error, comuníquese con el administrador'
            } else {
                this.error = 'Rut o contraseña incorrecta'
            }
        })
    }

}
