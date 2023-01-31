export class Leave {
    constructor(protected numberDays: number) { }
    
    getInfo(): string {
        return "myleave is " + this.numberDays + " days";
    }
}