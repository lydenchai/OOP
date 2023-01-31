"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Leave = void 0;
class Leave {
    constructor(numberDays) {
        this.numberDays = numberDays;
    }
    getInfo() {
        return "myleave is " + this.numberDays + " days";
    }
}
exports.Leave = Leave;
