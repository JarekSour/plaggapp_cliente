import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AdminService {

    url = 'https://api.plagapp.cl';

    constructor(
        public http: HttpClient
    ) { }

    getDataADMIN(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/administrador/get', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

}
