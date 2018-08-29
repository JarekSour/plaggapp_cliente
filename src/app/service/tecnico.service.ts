import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TecnicoService {

    url = 'https://api.plagapp.cl';

    constructor(public http: HttpClient, ) { }

    getAllTechClient(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/tecnico/list', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    getTechById(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/tecnico/get-by-id', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

}
