import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { ClienteService } from '../../../service/cliente.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css',
        '../../../../assets/css/theme-default/bootstrap.css',
        '../../../../assets/css/theme-default/materialadmin.css',
        '../../../../assets/css/theme-default/font-awesome.min.css',
        '../../../../assets/css/theme-default/material-design-iconic-font.min.css']
})
export class ContactComponent implements OnInit {

    json = { token: localStorage.getItem('token'), user: 'client', nombre: '', correo: '', comentario: '' }

    constructor(
        private toastr: ToastrService,
        public authService: AuthService,
        public clienteService: ClienteService,
        public router: Router
    ) { }

    ngOnInit() {
    }

    newContact() {
        this.clienteService.sendEmail(this.json).then((response) => {
            if (response['status']) {
                this.json.nombre = '';
                this.json.correo = '';
                this.json.comentario = '';
                this.toastr.success('', 'El mensaje ha sido enviado exitosamente', {
                    closeButton: true,
                    positionClass: 'toast-bottom-right',
                    timeOut: 6000,
                    extendedTimeOut: 3000
                });
            } else if (response['data'] == 'expired') {
                this.authService.closeSession();
                this.router.navigate(['/login']);
            } else {
                this.toastr.error('', 'Ups!, ocurrió un error, reintente más tarde', {
                    closeButton: true,
                    positionClass: 'toast-bottom-right',
                    timeOut: 6000,
                    extendedTimeOut: 3000
                });
            }
        })
    }

}
