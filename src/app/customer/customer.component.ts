import { Component } from '@angular/core'
import { Customer } from './customer.model'
import { CustomerService } from './customer.service'
import { PanelService } from '../panel/panel.service'

@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.css'],
    providers: [CustomerService, PanelService]
})
export class CustomerComponent {

    private customerService: CustomerService
    public title: string = 'Add New'
    public titleStrong: string = 'Customer'
    public titleButton: string = 'Save'
    public customer: Customer

    constructor() {
        PanelService.title.emit({
            title: this.title,
            strong: this.titleStrong,
            button: this.titleButton,
            hidden: ''
        })
    }

    public insertCustomer(): void {
        this.customerService.insertCustomer()
    }
}