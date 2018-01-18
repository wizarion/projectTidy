import { Component, OnInit } from '@angular/core'
import { Customer } from '../customer/customer.model'
import { CustomerService } from '../customer/customer.service'
import { PanelService } from '../panel/panel.service'

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css'],
    providers: [CustomerService, PanelService]
})
export class TableComponent implements OnInit {

    public title: string = 'Customers'
    public titleStrong: string = 'Management'
    public titleButton: string = 'Add New Customer'
    public typeButton: string = 'info'
    public routerButton: string = '/customer'
    public customers: Customer[]

    constructor(private customerService: CustomerService) {
        PanelService.title.emit({
            title: this.title,
            strong: this.titleStrong,
            titleButton: this.titleButton,
            typeButton: this.typeButton,
            routerButton: this.routerButton
        })
    }

    ngOnInit() {
        this.getCustomers()
    }

    getCustomers(): void {
        this.customerService
            .getCustomers()
            .subscribe(
            (customers: Customer[]) => {
                this.customers = customers
            },
            (error: any) => console.log(error)
            )
    }

    updateCustomer(): void {
        alert('work')
    }

    removeCustomer(id: number): void {

        let conf = confirm("Do you really want to remove this customer?")
        if (conf) {
            this.customerService.removeCustomer(id)
                .subscribe((customer: string) => {
                    this.getCustomers()
                })
        }
    }
}