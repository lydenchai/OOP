class Address {
  constructor(
    private city: string,
    private street: string,
    private country: string
  ) {}

  equals(other: Address) {
    return (
      this.city === other.city &&
      this.street === other.street &&
      this.country === other.country
    );
  }
}
class Customer {
  constructor(
    private firstName: string,
    private lastName: string,
    private address: Address
  ) {}

  equals(other: Customer) {
    return (
      this.firstName === other.firstName &&
      this.lastName === other.lastName &&
      this.address.equals(other.address)
    );
  }
}

class Room {
  private customers: Customer[] = [];
  constructor(private id: string, private maxBeds: number) {}

  getCustomers() {
    return this.customers;
  }

  roomIsFull(): boolean {
    return this.maxBeds == this.customers.length;
  }

  addCustomer(customer: Customer) {
    this.customers.push(customer);
  }
}

class Hotel {
  private rooms: Room[] = [];

  constructor(private name: string) {}

  hasCustomer(customerToCheck: Customer): boolean {
    for (let room of this.rooms) {
      for (let customer of room.getCustomers()) {
        if (customer.equals(customerToCheck)) {
          return true;
        }
      }
    }
    return false;
  }

  registerCustomer(customer: Customer, room: Room) {
    if (!this.hasCustomer(customer) && !room.roomIsFull()) {
      room.addCustomer(customer);
    }
  }
}
