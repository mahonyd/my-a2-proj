import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import { CustomerListComponent } from './customer/customerlist.component';
import { CustomerService } from './customer/customer.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [CustomerListComponent],
    providers: [HTTP_PROVIDERS, CustomerService]
})
export class AppComponent { 
    title = 'Customer App';
    name = 'David';
    myColour = 'green';
    
    changeColour() {
        this.myColour = this.myColour === 'green' ? 'red' : 'green';
    }
}
