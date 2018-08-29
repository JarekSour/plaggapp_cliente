import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { PuntoService } from '../../../service/punto.service';

@Component({
    selector: 'app-informe',
    templateUrl: './informe.component.html',
    styleUrls: ['./informe.component.css',
        '../../../../assets/css/theme-default/bootstrap.css',
        '../../../../assets/css/theme-default/materialadmin.css',
        '../../../../assets/css/theme-default/font-awesome.min.css',
        '../../../../assets/css/theme-default/material-design-iconic-font.min.css']
})
export class InformeComponent implements OnInit {

    public chartData: any[] = [
        { data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: '10 puntos con mayor consumo de cebos' }
    ];
    public chartLabels: Array<any> = [];
    public chartOptions: any = {
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    };
    public chartColors2: Array<any> = [
        {
            backgroundColor: 'rgba(255, 0, 0, 0.45)',
            borderColor: 'rgb(255, 0, 0)',
            pointBackgroundColor: 'rgb(204, 24, 24)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(204, 24, 24)'
        }
    ];
    public chartLegend: boolean = true;
    public chartType: string = 'line';

    constructor(
        public puntoService: PuntoService,
        public authService: AuthService,
    ) { }

    ngOnInit() {
        this.puntoService.getInforme({ token: localStorage.getItem('token'), user: 'client' }).then((response) => {
            if (response['status']) {
                let json = response['puntos'];
                json.sort((a, b) => a.count < b.count)

                let aux = [];
                for (let item of json) {
                    this.chartLabels.push(item.nombre)
                    aux.push(item.count);
                    if (aux.length == 10)
                        break;
                }
                let _chartData: Array<any> = new Array(this.chartData.length);
                _chartData[0] = { data: aux, label: this.chartData[0].label };
                this.chartData = _chartData;
            }
        })

    }

}
