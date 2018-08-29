import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

    url = 'https://api.plagapp.cl';

    constructor(public http: HttpClient ) { }

    // islogged() {
    //     if (localStorage.getItem('token'))
    //         return true;
    //     else
    //         return false;
    // }

    login(json) {
        return new Promise((resolve, reject) => {
            this.http.post(this.url + '/cliente/login', json)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    closeSession() {
        localStorage.clear();
    }

    copyYear() {
        return new Date().getFullYear();
    }

}
