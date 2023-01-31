import { Tree } from "./Tree";
export class House {
     name: string;
     trees: Tree[] = [];

     constructor(name: string) {
          this.name = name;
     }

     addTree(tree: Tree) {
          this.trees.push(tree);
     }

     getNumberOftree(): number {
          return this.trees.length;
     }
}

let house = new House("ronan");
let tree = new Tree(45);
house.addTree(tree);

console.log(house.getNumberOftree());