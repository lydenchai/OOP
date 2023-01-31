import { Leave } from './Leave';

export class SickReason extends Leave {
    private sickReason: string;

    constructor(numberDays: number, sickReason: string) {
        super(numberDays);
        this.sickReason = sickReason;
    }

    // print() {
    //     console.log("My leave is:" + this.numberOfDay + "days");
    // }

    getInfo(): string {
        let result = super.getInfo();
        result += " and my sick reason is : " + this.sickReason;
        return result;
    }
}