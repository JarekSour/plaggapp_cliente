import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ClienteService {

    url = 'https://api.plagapp.cl';

    constructor(public http: HttpClient, ) { }

    getCliente(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/cliente/get', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    sendEmail(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/cliente/email', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

}
