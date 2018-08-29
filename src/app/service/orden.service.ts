import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OrdenService {

    url = 'https://api.plagapp.cl';

    constructor(public http: HttpClient, ) { }

    getOrdenes(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/orden/list-for-client', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    getInfoOrden(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/orden/detail', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

}
