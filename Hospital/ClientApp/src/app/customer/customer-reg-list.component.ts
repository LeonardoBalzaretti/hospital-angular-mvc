import { Component, Inject } from '@angular/core';
import { Customer } from './customer';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-reg-list.component.html',
  styleUrls: ['./customer-reg-list.component.css']
})
export class CustomerListComponent {
  public customers: ICustomer[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<ICustomer[]>(baseUrl + 'customer').subscribe(result => {
      this.customers = result;
    }, error => console.error(error));
  }
}

interface ICustomer {
  id: number;
  name: string;
  lastName: string;
  email: string;
  birthday: Date;
  height: number;
  width: number;
  bloodType: string;
}

