import { Address } from "./Address";
import { Trip } from "./Trip";
import { DateTime } from "./DateTime";
import { Customer } from "./Customer";

let paris = new Address("Paris", "France");
let siemReap = new Address("siemReap", "Cambodia");
let phnomPenh = new Address("Phnom Penh", "Cambodia");
let kampot = new Address("Kampot", "Cambodia");

// --------- CUSTOMERS ------------------------------------------------
let ronan = new Customer("Ronan", "Ogor");
ronan.setAddress(paris);

let him = new Customer("Him", "Hey");

let sovanda = new Customer("Sovanda", "Chib");
sovanda.setAddress(phnomPenh);

// --------- TRIPS ------------------------------------------------------
let kakaTrip = new Trip("KAKA bus");
kakaTrip.setDeparture(phnomPenh, new DateTime("march", "10am"));
kakaTrip.setArrival(kampot, new DateTime("march", "12am"));
kakaTrip.addCustomers(him, sovanda);

let lyhourTrip = new Trip("Lyhour express");
lyhourTrip.setDeparture(phnomPenh, new DateTime("march", "10am"));
lyhourTrip.setArrival(siemReap, new DateTime("march", "12am"));
lyhourTrip.addCustomers(him, sovanda, ronan);

// --------- TEST API ------------------------------------------------------
