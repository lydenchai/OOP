import { Arm } from "./Arms";
export class Human {
     skinColor: string;
     left: Arm;
     right: Arm;

     constructor(skinColor: string) {
          this.left = new Arm(skinColor);
          this.right = new Arm(skinColor);
     }
}