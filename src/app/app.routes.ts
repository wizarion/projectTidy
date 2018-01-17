import { Routes } from '@angular/router'

import { TableComponent } from './table/table.component'
import { CustomerComponent } from './customer/customer.component'

export const ROUTES: Routes = [
    { path: '', component: TableComponent },
    { path: 'customer', component: CustomerComponent }
]