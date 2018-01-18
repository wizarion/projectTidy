import { Component, ViewChild } from '@angular/core'
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router'
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

    @ViewChild('formData') public formData: NgForm

    public title: string = 'New'
    public titleStrong: string = 'Customer'
    public titleButton: string = 'Back'
    public typeButton: string = 'secondary'
    public routerButton: string = '/'
    public customer: Customer = new Customer()
    public invalid: string= ''
    public touched: string = ''

    constructor(private customerService: CustomerService, private router: Router) {
        PanelService.title.emit({
            title: this.title,
            strong: this.titleStrong,
            titleButton: this.titleButton,
            routerButton: this.routerButton,
            
        })
    }

    public insertCustomer(): void {
        
        if(this.formData.valid) {
            this.customer.name = this.formData.value.name
            this.customer.email = this.formData.value.email
            this.customer.phone = this.formData.value.phone
            this.customer.zipcode = this.formData.value.zipcode
            this.customer.address = this.formData.value.address
            this.customer.city = this.formData.value.city
            this.customer.state = this.formData.value.state
            
            this.customerService.insertCustomers(this.customer)
                .subscribe((res: number) => {
                    this.router.navigateByUrl('/')
                })
        } else {
            this.invalid = 'ng-invalid'
            this.touched = 'ng-touched'
        }
    }
}