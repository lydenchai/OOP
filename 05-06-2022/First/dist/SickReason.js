"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SickReason = void 0;
const Leave_1 = require("./Leave");
class SickReason extends Leave_1.Leave {
    constructor(numberDays, sickReason) {
        super(numberDays);
        this.sickReason = sickReason;
    }
    // print() {
    //     console.log("My leave is:" + this.numberOfDay + "days");
    // }
    getInfo() {
        let result = super.getInfo();
        result += " and my sick reason is : " + this.sickReason;
        return result;
    }
}
exports.SickReason = SickReason;
