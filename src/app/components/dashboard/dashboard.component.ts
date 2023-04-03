import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  customerDetails !: FormGroup;
  customerObj : Customer = new Customer();
  customerList : Customer[] = [];
  term : string;

  constructor(private formBuilder : FormBuilder,
              public customerService : CustomerService) { }

  ngOnInit(): void {

    this.getAllCustomers();

    this.customerDetails = this.formBuilder.group({
      id : [''],
      username : [''],
      email : [''],
      password : ['']
    });
  }

  addCustomer() {
    console.log(this.customerDetails);
    this.customerObj.id = this.customerDetails.value.id;
    this.customerObj.username = this.customerDetails.value.username;
    this.customerObj.email = this.customerDetails.value.email;
    this.customerObj.password = this.customerDetails.value.password;

    this.customerService.addCustomer(this.customerObj).subscribe(res => {
      console.log(res);
      this.getAllCustomers();
    }, err => {
      console.log(err);
    });
  }

  getAllCustomers() {

    this.customerService.getAllCustomers().subscribe(res => {
      this.customerList = res;
      console.log(res);
    }, err => {
      console.log("fetch error");
    });
  }

  editCustomer(customer : Customer) {
    this.customerDetails.controls['id'].setValue(customer.id);
    this.customerDetails.controls['username'].setValue(customer.username);
    this.customerDetails.controls['email'].setValue(customer.email);
    this.customerDetails.controls['password'].setValue(customer.password);
    console.log(this.customerDetails);
  }

  updateCustomer() {
    console.log("update start");
    this.customerObj.id = this.customerDetails.value.id;
    this.customerObj.username = this.customerDetails.value.username;
    this.customerObj.email = this.customerDetails.value.email;
    this.customerObj.password = this.customerDetails.value.password;
    console.log(this.customerObj);

    this.customerService.updateCustomer(this.customerObj).subscribe(res => {
      console.log(res);
      this.getAllCustomers();
    }, err => {
      console.log("update" + err);
    })
  }

  deleteCustomer(customer : Customer) {
      this.customerService.deleteCustomer(customer).subscribe(res => {
        console.log("deleted");
        this.getAllCustomers();
      }, err => {
        console.log(err);
      })
  }
}
