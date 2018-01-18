import { Component, ViewChild, Input } from '@angular/core'
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
    public invalid: string = ''
    public touched: string = ''
    @Input() public customer: Customer = new Customer()
    
    constructor(private customerService: CustomerService, private router: Router) {
        PanelService.emitValues.emit({
            title: this.title,
            strong: this.titleStrong,
            titleButton: this.titleButton,
            typeButton: this.typeButton,
            routerButton: this.routerButton,
        })

        if (CustomerService.customer){
            this.customer = CustomerService.customer
            
        }
    }

    public insertCustomer(): void {

        if (this.formData.valid) {

            this.customer = this.formData.value

            this.customerService.saveOrUpdateCustomers(this.customer)
                .subscribe((res: number) => {
                    this.router.navigateByUrl('/')
                })
        } else {
            this.invalid = 'ng-invalid'
            this.touched = 'ng-touched'
        }
    }
}