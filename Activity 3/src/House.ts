import { Door } from "./Door";
import { Room } from "./Room";

export class House {
  name: string;
  doors: Door[] = [];
  rooms: Room[] = [];
  constructor(name: string) {
    this.name = name;
  }

  addDoor(door: Door) {
    this.doors.push(door);
  }

  addRoom(room: Room) {
    this.rooms.push(room);
  }
}

let house = new House("A ja Vun");
let room1 = new Room("Cats");
let room2 = new Room("Computers");