import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TecnicoService } from '../../../service/tecnico.service';
import { AuthService } from '../../../service/auth.service';

@Component({
    selector: 'app-equipo',
    templateUrl: './equipo.component.html',
    styleUrls: ['./equipo.component.css',
        '../../../../assets/css/theme-default/bootstrap.css',
        '../../../../assets/css/theme-default/materialadmin.css',
        '../../../../assets/css/theme-default/font-awesome.min.css',
        '../../../../assets/css/theme-default/material-design-iconic-font.min.css']
})
export class EquipoComponent implements OnInit {

    tech: any;
    
    constructor(
        public authService: AuthService,
        public techService: TecnicoService,
        public router: Router
    ) { }

    ngOnInit() {
        this.techService.getAllTechClient({ token: localStorage.getItem('token'), user: 'client' }).then((response) => {
            if (response['status']) {
                this.tech = response['data'];
            } else if (response['data'] == 'expired') {
                this.authService.closeSession();
                this.router.navigate(['/login']);
            }
        })
    }

}
