import { Http } from '@angular/http'
import { Injectable } from '@angular/core'
import { Customer } from './customer.model'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class CustomerService {

    constructor(private http: Http) {}

    public getCustomers(): Promise<Customer[]> {
        return this.http.get('http://tidy-api-test.herokuapp.com/api/v1/customer_data.json')
        .toPromise()
        .then((response: any) => response.json())
    }

    public removeCustomer(id: number): Promise<string> {
        return this.http.delete(`http://tidy-api-test.herokuapp.com/api/v1/customer_data/${id}`)
        .toPromise()
        .then((response: any) => response.json())
    }
}