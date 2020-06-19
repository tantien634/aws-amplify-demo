import { Component, OnInit } from '@angular/core';
import { APIService, ListCustomersQuery, OnCreateCustomerSubscription } from 'src/app/API.service';
import { API } from 'aws-amplify';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: any[];

  constructor(private api: APIService) { }

  ngOnInit(): void {
    this.api.ListCustomers().then((list: ListCustomersQuery) => {
      this.customers = list.items;
      console.log(list.items);
    });
  }

}