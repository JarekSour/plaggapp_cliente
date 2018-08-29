import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { visitAll } from '@angular/compiler';
import { Subject } from 'rxjs';
import { AuthService } from '../../../service/auth.service';
import { PuntoService } from '../../../service/punto.service';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, DAYS_OF_WEEK, CalendarDateFormatter, DateFormatterParams } from 'angular-calendar';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs);

const colors: any = {
    black: {
        primary: 'rgb(102, 101, 101)',
        secondary: 'rgb(102, 101, 101)'
    },
    red: {
        primary: 'rgb(236, 56, 56);',
        secondary: 'rgb(236, 56, 56);'
    }
};

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css',
        '../../../../assets/css/theme-default/bootstrap.css',
        '../../../../assets/css/theme-default/materialadmin.css',
        '../../../../assets/css/theme-default/font-awesome.min.css',
        '../../../../assets/css/theme-default/material-design-iconic-font.min.css']
})
export class HomeComponent implements OnInit {

    visitas: any;
    trampas: any;
    aplicaciones: any;
    puntos: any;

    view: string = 'month';
    viewDate: Date = new Date();
    refresh: Subject<any> = new Subject();
    events: CalendarEvent[] = [];
    activeDayIsOpen: boolean = true;
    locale: string = 'es';
    weekStartsOn: number = DAYS_OF_WEEK.MONDAY;
    weekendDays: number[] = [DAYS_OF_WEEK.SATURDAY, DAYS_OF_WEEK.SUNDAY];

    constructor(
        public authService: AuthService,
        public puntoService: PuntoService,
        public router: Router
    ) { }

    ngOnInit() {
        this.puntoService.getEstadisticas({ token: localStorage.getItem('token'), user: 'client' }).then((response) => {
            if (response['status']) {
                this.visitas = response['visitas'];
                this.trampas = response['trampas'];
                this.aplicaciones = response['aplicaciones'];
                this.puntos = response['puntos'];

                for (let item of response['ordenes'])
                    this.events.push({ start: addDays(new Date(item['fecha']), 1), end: addDays(new Date(item['fecha']), 1), title: item['nombre_empresa'] + ' - ' + item['nombre'] + ' ' + item['apellido_paterno'] + ' ' + item['apellido_materno'] + ' - '+item['servicio'], color: item['estado'] == 0 ? colors.red : colors.black, meta: { id: item['id'] } })
                this.refresh.next();
            } else if (response['data'] == 'expired') {
                this.authService.closeSession();
                this.router.navigate(['/login']);
            }
        })
    }

    dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
        if (isSameMonth(date, this.viewDate)) {
            if (
                (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0
            ) {
                this.activeDayIsOpen = false;
            } else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
    }

}
