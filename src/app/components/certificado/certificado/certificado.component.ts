import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentoService } from '../../../service/documento.service';
import { AuthService } from '../../../service/auth.service';

@Component({
    selector: 'app-certificado',
    templateUrl: './certificado.component.html',
    styleUrls: ['./certificado.component.css',
        '../../../../assets/css/theme-default/bootstrap.css',
        '../../../../assets/css/theme-default/materialadmin.css',
        '../../../../assets/css/theme-default/font-awesome.min.css',
        '../../../../assets/css/theme-default/material-design-iconic-font.min.css']
})
export class CertificadoComponent implements OnInit {

    docs = [];
    documentosTecnicos: any;
    documentosLegales: any;

    constructor(
        public authService: AuthService,
        public documentoService: DocumentoService,
        public router: Router
    ) { }

    ngOnInit() {
        this.documentoService.getClientDocuments({ token: localStorage.getItem('token'), user: 'client' }).then((response) => {
            if (response['status'] == true) {
                this.docs = response['data'];
            } else if (response['data'] == 'expired') {
                this.authService.closeSession();
                this.router.navigate(['/login']);
            }
        })

        this.documentoService.getDefaultDocuments({ token: localStorage.getItem('token'), user: 'client' }).then((response) => {
            if (response['status'] == true) {
                this.documentosTecnicos = response['tech'];
                this.documentosLegales = response['legal'];
            } else if (response['data'] == 'expired') {
                this.authService.closeSession();
                this.router.navigate(['/login']);
            }
        })
    }

    downloadDoc(url) {
        var newWindow = window.open('https://api.plagapp.cl/storage/' + url);
    }
}
