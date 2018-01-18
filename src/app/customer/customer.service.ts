import { Http, RequestOptions, Headers, Response } from '@angular/http'
import { Injectable, Output } from '@angular/core'
import { Customer } from './customer.model'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { URL_API } from '../app.api'

@Injectable()
export class CustomerService {

    constructor(private http: Http) {}

    public getCustomers(): Observable<Customer[]> {
        return this.http.get(`${URL_API}.json`)
            .map(response => response.json())
            .catch(error => Observable.throw(error.message))
    }

    public removeCustomer(id: number): any {
        return this.http.delete(`${URL_API}/${id}`)
    }

    public insertCustomers(customer: Customer): Observable<number> {
        
        let headers: Headers = new Headers()
        headers.append('Content-type', 'application/json')

        return this.http.post(
            `${URL_API}`,
            JSON.stringify(customer),
            new RequestOptions({ headers: headers })
        )
        .map((res: Response) => res.json().id)
    }
}