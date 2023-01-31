"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SickReason_1 = require("./SickReason");
let leave = new SickReason_1.SickReason(4, "covid");
console.log(leave.getInfo());
