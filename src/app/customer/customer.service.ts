import { Injectable } from '@angular/core';
import { Http , Response} from '@angular/http';
import  'rxjs/add/operator/map' ;
import { Observable } from 'rxjs/Rx';

const URL_CUSTOMER = 'app/customerlist.json';

@Injectable()
export class CustomerService {
	
	constructor(private _http: Http) { }
	
	getCustomerList() {
		return this._http.get(URL_CUSTOMER)
			.map((response: Response) => response.json())
			.toPromise()
			.catch((err: any) => {
				console.log(err);
				return Promise.reject(err);
			});
	}
	
	getCustomerList_Observable() {
		return this._http.get(URL_CUSTOMER)
			.map((response: Response) => response.json())
			.catch(this._handleError);
	}
	
	_handleError(err: any) {
		console.log(err);   // log in backend database
		return Observable.throw(err);  // opportunity to customise error
	}
}