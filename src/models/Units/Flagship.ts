import { Unit } from "../Unit";
import { SustainDamage } from "../UnitAbilities/SustainDamage";
import { Bombardment } from "../UnitAbilities/Bombardment";
import { AntiFighterBarrage } from "../UnitAbilities/AntiFighterBarrage";

export class DuhaMenaimon implements Unit {
    name = "Duho Menaimon";
    type: "ship" | "ground" | "structure" = "ship";
    damaged = false;
    destroyed = false;
    cost = 8;
    combat = [7, 2];
    move = 1;
    capacity = 5;
    abilities = [new SustainDamage()];
    hit() {
        if (this.damaged == true) return this.destroy();
        this.damaged = true;
        return this;
    }
    destroy() {
        this.destroyed = true;
        return this;
    }
    constructor(public count: number = 1) {}
}

export class ArcSecundus implements Unit {
    name = "Arc Secundus";
    type: "ship" | "ground" | "structure" = "ship";
    damaged = false;
    destroyed = false;
    cost = 8;
    combat = [5, 2];
    move = 1;
    capacity = 3;
    abilities = [new Bombardment(5, 3), new SustainDamage()];
    hit() {
        if (this.damaged == true) return this.destroy();
        this.damaged = true;
        return this;
    }
    destroy() {
        this.destroyed = true;
        return this;
    }
    constructor(public count: number = 1) {}
}

export class SonOfRagh implements Unit {
    name = "Son of Ragh";
    type: "ship" | "ground" | "structure" = "ship";
    damaged = false;
    destroyed = false;
    cost = 8;
    combat = [5, 2];
    move = 1;
    capacity = 3;
    abilities = [new AntiFighterBarrage(6, 4)];
    hit() {
        if (this.damaged == true) return this.destroy();
        this.damaged = true;
        return this;
    }
    destroy() {
        this.destroyed = true;
        return this;
    }
    constructor(public count: number = 1) {}
}

export class TheInferno implements Unit {
    name = "The Inferno";
    type: "ship" | "ground" | "structure" = "ship";
    damaged = false;
    destroyed = false;
    cost = 8;
    combat = [5, 2];
    move = 1;
    capacity = 3;
    abilities = [new SustainDamage()];
    hit() {
        if (this.damaged == true) return this.destroy();
        this.damaged = true;
        return this;
    }
    destroy() {
        this.destroyed = true;
        return this;
    }
    constructor(public count: number = 1) {}
}

export class WrathOfKenara implements Unit {
    name = "Wrath of Kenara";
    type: "ship" | "ground" | "structure" = "ship";
    damaged = false;
    destroyed = false;
    cost = 8;
    combat = [7, 2];
    move = 1;
    capacity = 3;
    abilities = [new SustainDamage()];
    hit() {
        if (this.damaged == true) return this.destroy();
        this.damaged = true;
        return this;
    }
    destroy() {
        this.destroyed = true;
        return this;
    }
    constructor(public count: number = 1) {}
}

export class Genesis implements Unit {
    name = "Genesis";
    type: "ship" | "ground" | "structure" = "ship";
    damaged = false;
    destroyed = false;
    cost = 8;
    combat = [5, 2];
    move = 1;
    capacity = 12;
    abilities = [new SustainDamage()];
    hit() {
        if (this.damaged == true) return this.destroy();
        this.damaged = true;
        return this;
    }
    destroy() {
        this.destroyed = true;
        return this;
    }
    constructor(public count: number = 1) {}
}

export class HilColish implements Unit {
    name = "Hil Colish";
    type: "ship" | "ground" | "structure" = "ship";
    damaged = false;
    destroyed = false;
    cost = 8;
    combat = 5;
    move = 1;
    capacity = 3;
    abilities = [new SustainDamage()];
    hit() {
        if (this.damaged == true) return this.destroy();
        this.damaged = true;
        return this;
    }
    destroy() {
        this.destroyed = true;
        return this;
    }
    constructor(public count: number = 1) {}
}