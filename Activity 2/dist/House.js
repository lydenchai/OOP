"use strict";
exports.__esModule = true;
exports.House = void 0;
var Tree_1 = require("./Tree");
var House = /** @class */ (function () {
    function House(name) {
        this.trees = [];
        this.name = name;
    }
    House.prototype.addTree = function (tree) {
        this.trees.push(tree);
    };
    House.prototype.getNumberOftree = function () {
        return this.trees.length;
    };
    return House;
}());
exports.House = House;
var house = new House("ronan");
var tree45 = new Tree_1.Tree(45);
house.addTree(tree45);
console.log(house.getNumberOftree());
