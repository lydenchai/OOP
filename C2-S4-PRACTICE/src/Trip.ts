import { Address } from "./Address";
import { Customer } from "./Customer";
import { DateTime } from "./DateTime";

export class Trip {
  private customers: Customer[] = [];
  private departureAddress?: Address;
  private departureTime?: DateTime;
  private arrivalAddress?: Address;
  private arrivalTime?: DateTime;

  constructor(private busName: string) {}

  addCustomers(...newCustomers: Customer[]) {
    this.customers = this.customers.concat(newCustomers);
  }

  setDeparture(departureAddress: Address, departureTime: DateTime) {
    this.departureAddress = departureAddress;
    this.departureTime = departureTime;
  }
  
  setArrival(arrivalAddress: Address, arrivalTime: DateTime) {
    this.arrivalAddress = arrivalAddress;
    this.arrivalTime = arrivalTime;
  }
}
