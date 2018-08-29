import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { OrdenService } from '../../../service/orden.service';
import { Router } from '@angular/router';
import { log } from 'util';

@Component({
    selector: 'app-ordenes',
    templateUrl: './ordenes.component.html',
    styleUrls: ['./ordenes.component.css',
        '../../../../assets/css/theme-default/bootstrap.css',
        '../../../../assets/css/theme-default/materialadmin.css',
        '../../../../assets/css/theme-default/font-awesome.min.css',
        '../../../../assets/css/theme-default/material-design-iconic-font.min.css']
})
export class OrdenesComponent implements OnInit {

    p: number = 1;
    ordenes: any;

    constructor(
        public authService: AuthService,
        public ordenService: OrdenService,
        public router: Router
    ) { }

    ngOnInit() {
        this.ordenService.getOrdenes({ token: localStorage.getItem('token'), user: 'client' }).then((response) => {
            if (response['status']) {
                this.ordenes = response['data'];
            } else if (response['data'] == 'expired') {
                this.authService.closeSession();
                this.router.navigate(['/login']);
            }
        })
    }

    toDetail(item) {
        this.router.navigate(['/orden/detalle', item['id']]);
    }

}
