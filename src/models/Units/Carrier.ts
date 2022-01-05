import { Unit } from "../Unit";
import { ResearchBlue } from "../TechnologyMaterial";

export class Carrier implements Unit {
    name = "Carrier";
    type: "ship" | "ground" | "structure" = "ship";
    destroyed = false;
    cost = 3;
    combat = 9;
    move = 1;
    capacity = 4;
    upgradeMaterials = [new ResearchBlue(2)];
    upgrade() {
        return new Carrier2(this.count);
    }
    hit() {
        return this.destroy();
    }
    destroy() {
        this.destroyed = true;
        return this;
    }
    constructor(public count: number = 1) {}
}

export class Carrier2 implements Unit {
    name = "Carrier 2";
    type: "ship" | "ground" | "structure" = "ship";
    destroyed = false;
    cost = 3;
    combat = 9;
    move = 1;
    capacity = 4;
    hit() {
        return this.destroy();
    }
    destroy() {
        this.destroyed = true;
        return this;
    }
    constructor(public count: number = 1) {}
}
