import { Component, OnInit } from '@angular/core'
import { Customer } from '../customer/customer.model'
import { CustomerService } from '../customer/customer.service';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css'],
    providers: [ CustomerService ]
})
export class TableComponent implements OnInit{

    public customers: Customer[]

    constructor(private customerService: CustomerService) { }

    ngOnInit() {
        
        this.customerService.getCustomers()
            .then(( customers: Customer[] ) => {
                this.customers = customers
            })
            .catch(( param: any ) => {
                console.log(param)
            })
    }

    updateCustomer(): void {
        alert('work')
    }

    removeCustomer(id: number): void {
        this.customerService.removeCustomer(id)
            .then(( customer: string ) => {
                alert('Usuário removido com sucesso')
            })
            .catch(( param: any ) => {
                alert('deu ruim')
                console.log(param)
            })
    }
}