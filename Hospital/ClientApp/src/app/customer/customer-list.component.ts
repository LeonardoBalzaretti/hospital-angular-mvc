import { Component, Inject } from '@angular/core';
import { Customer } from './customer';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {
  public customers: Customer[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Customer[]>(baseUrl + 'customer').subscribe(result => {
      this.customers = result;
    }, error => console.error(error));
  }
}
