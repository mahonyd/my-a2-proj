import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { CustomerComponent } from './customer.component';
import { CustomerService } from './customer.service';

@Component({
	selector: 'app-customerlist',
	templateUrl: 'app/customer/customerlist.component.html',
	directives: [CustomerComponent]
})
export class CustomerListComponent implements OnInit {
	customerList: Promise<any[]>;
	//customerList: Observable<any[]>;
	
	constructor(private _customerService: CustomerService) { }
	
	ngOnInit() { 
		this.customerList = this._customerService.getCustomerList()
			.catch((err) => {
				console.log(err);  // show user message
			});
			
		// Rx observable version	
		//this.customerList = this._customerService.getCustomerList()
		//	.catch((err) => {
		//		console.log(err);  // show user message
		//		return Observable.of(true);  // then eat error
		//	});
		
		// Straight up promise to array	
		//this._customerService.getCustomerList()
		//  .then((customers) => this.customers = customers)
		//	.catch((err) => {
		//		console.log(err);  // show user message
		//	});
	}
}