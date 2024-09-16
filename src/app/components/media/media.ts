export class Media {
    ac1: number;
    ac2: number;
    ag: number;
    af: number;
    final: number;

    constructor(ac1:number,ac2:number,ag:number,af:number) {
        this.ac1 = ac1;
        this.ac2 = ac2;
        this.ag = ag;
        this.af = af;
        this.final = this.media();
    }

    media() {
        return this.ac1 * 0.15 + this.ac2 * 0.30 + this.ag * 0.10 + this.af * 0.45
    }
}