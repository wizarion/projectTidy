import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { ROUTES } from './app.routes'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PanelComponent } from './panel/panel.component';
import { TableComponent } from './table/table.component';
import { CustomerComponent } from './customer/customer.component';
import { PanelService } from './panel/panel.service';
import { CustomerService } from './customer/customer.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PanelComponent,
    TableComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [PanelService, CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
