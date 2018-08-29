import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DocumentoService {

    url = 'https://api.plagapp.cl';

    constructor(public http: HttpClient, ) { }

    getFirmaJefe(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/documento/firma/get', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    getDefaultDocuments(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/documento/default/get', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    getClientDocuments(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/documento/cliente/get', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    listDocs(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/documento/tecnico/get', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

}
