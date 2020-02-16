import { Component } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-reg-form.component.html',
  styleUrls: ['./customer-reg-form.component.css']
})
export class CustomerFormComponent {
  bloodTypes = ['AB', 'O', 'A', 'B'];

  model = new Customer(15, '', '', this.bloodTypes[0]);
  submitted = false;

  onSubmit() { this.submitted = true; }

  get diagnostic() { return JSON.stringify(this.model); }

  newCustomer() {
    this.model = new Customer(42, '', '', this.bloodTypes[0]);
  }

  showFormControls(form: any) {
    return form && form.controls['name'] && form.controls['name'].value;
  }
}
