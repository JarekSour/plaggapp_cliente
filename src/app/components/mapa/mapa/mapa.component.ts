import { Component, OnInit } from '@angular/core';
import { PuntoService } from '../../../service/punto.service';
import { AuthService } from '../../../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-mapa',
    templateUrl: './mapa.component.html',
    styleUrls: ['./mapa.component.css',
        '../../../../assets/css/theme-default/bootstrap.css',
        '../../../../assets/css/theme-default/materialadmin.css',
        '../../../../assets/css/theme-default/font-awesome.min.css',
        '../../../../assets/css/theme-default/material-design-iconic-font.min.css']
})
export class MapaComponent implements OnInit {

    lat: number;
    lng: number;
    zoom: number = 20;
    maxZoom: number = 22;
    mapTypeId: string = 'satellite';
    streetViewControl: boolean = false;
    markers = [];
    icon: string = 'https://i.imgur.com/pOHoEQ4.png';

    constructor(
        public puntoService: PuntoService,
        public authService: AuthService,
        public router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        let id = this.route.snapshot.paramMap.get('id');

        this.puntoService.getCoordenadas({ token: localStorage.getItem('token'), user: 'client', id: id }).then((response) => {
            if (response['status']) {
                for (let item of response['puntos']) {
                    this.lat = parseFloat(item['mapa'].split(',')[0]);
                    this.lng = parseFloat(item['mapa'].split(',')[1]);
                    this.markers.push({ lat: parseFloat(item['mapa'].split(',')[0]), lng: parseFloat(item['mapa'].split(',')[1]) })
                }
            } else if (response['data'] == 'expired') {
                this.authService.closeSession();
                this.router.navigate(['/login']);
            }
        })
    }

}
