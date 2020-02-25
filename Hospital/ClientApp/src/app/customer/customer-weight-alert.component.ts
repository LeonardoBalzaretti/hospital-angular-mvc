import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'customer-weight-alert',
  templateUrl: './customer-weight-alert.component.html',
  styleUrls: ['./customer-weight-alert.component.css']
})
export class CustomerWeightAlertsComponent implements OnInit {
  @Input() customer: Customer;

  constructor() { }

  ngOnInit() {
  }

}
