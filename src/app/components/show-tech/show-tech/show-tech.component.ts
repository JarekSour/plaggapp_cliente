import { Component, OnInit } from '@angular/core';
import { TecnicoService } from '../../../service/tecnico.service';
import { DocumentoService } from '../../../service/documento.service';
import { AuthService } from '../../../service/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-show-tech',
    templateUrl: './show-tech.component.html',
    styleUrls: ['./show-tech.component.css',
        '../../../../assets/css/theme-default/bootstrap.css',
        '../../../../assets/css/theme-default/materialadmin.css',
        '../../../../assets/css/theme-default/font-awesome.min.css',
        '../../../../assets/css/theme-default/material-design-iconic-font.min.css']
})
export class ShowTechComponent implements OnInit {

    idTech: any;
    data: any;
    json = {
        token: localStorage.getItem('token'), id: '', rut: '', nombre: '', paterno: '', materno: '', correo: '', telefono: '', emergencia: '',
        direccion: '', profesion: '', automovil: '', password: '', repassword: ''
    }
    documentos = [];

    constructor(
        public techService: TecnicoService,
        public documentoService: DocumentoService,
        public authService: AuthService,
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.data = { image: 'assets/img/avatar.png' };
    }

    ngOnInit() {
        this.idTech = this.route.snapshot.paramMap.get('id');
        this.techService.getTechById({ token: localStorage.getItem('token'), user: 'client', id: this.idTech }).then((response) => {
            if (response['status'] == true) {
                this.data.image = response['data']['avatar'] != null ? 'https://api.plagapp.cl/tecnico/avatar/get?image=' + response['data']['avatar'] : 'assets/img/avatar.png';
                this.json.rut = response['data']['rut'];
                this.json.nombre = response['data']['nombre'];
                this.json.paterno = response['data']['apellido_paterno'];
                this.json.materno = response['data']['apellido_materno'];
                this.json.correo = response['data']['correo'];
                this.json.telefono = response['data']['telefono'];
                this.json.emergencia = response['data']['telefono_emergencia'];
                this.json.direccion = response['data']['direccion'];
                this.json.profesion = response['data']['profesion'];
                this.json.automovil = response['data']['automovil'];
            } else if (response['data'] == 'expired') {
                this.authService.closeSession();
                this.router.navigate(['/login']);
            }
        })

        this.documentoService.listDocs({ token: localStorage.getItem('token'), user: 'client', id: this.idTech }).then((response) => {
            if (response['status'] == true) {
                this.documentos = response['data'];
            }else if (response['data'] == 'expired') {
                this.authService.closeSession();
                this.router.navigate(['/login']);
            }
        })
    }

    downloadDoc(url) {
        var newWindow = window.open('https://api.plagapp.cl/storage/' + url);
    }

}
