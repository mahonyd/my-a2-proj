"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var customer_component_1 = require('./customer.component');
var customer_service_1 = require('./customer.service');
var CustomerListComponent = (function () {
    //customerList: Observable<any[]>;
    function CustomerListComponent(_customerService) {
        this._customerService = _customerService;
    }
    CustomerListComponent.prototype.ngOnInit = function () {
        this.customerList = this._customerService.getCustomerList()
            .catch(function (err) {
            console.log(err); // show user message
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
    };
    CustomerListComponent = __decorate([
        core_1.Component({
            selector: 'app-customerlist',
            templateUrl: 'app/customer/customerlist.component.html',
            directives: [customer_component_1.CustomerComponent]
        }), 
        __metadata('design:paramtypes', [customer_service_1.CustomerService])
    ], CustomerListComponent);
    return CustomerListComponent;
}());
exports.CustomerListComponent = CustomerListComponent;
//# sourceMappingURL=customerlist.component.js.map