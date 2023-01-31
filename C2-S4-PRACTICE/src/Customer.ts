import { Address } from "./Address";

export class Customer {
  private address?: Address;

  constructor(private firstName: string, private lastName: string) {}

  setAddress(newAddress: Address) {
    this.address = newAddress;
  }
}
