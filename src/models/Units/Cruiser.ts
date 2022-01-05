import { Unit } from "../Unit";
import {
    ResearchGreen,
    ResearchYellow,
    ResearchRed,
} from "../TechnologyMaterial";

export class Cruiser implements Unit {
    name = "Cruiser";
    type: "ship" | "ground" | "structure" = "ship";
    destroyed = false;
    cost = 2;
    combat = 7;
    move = 2;
    capacity = 0;
    upgradeMaterials = [
        new ResearchGreen(),
        new ResearchYellow(),
        new ResearchRed(),
    ];
    upgrade() {
        return new Cruiser2(this.count);
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

export class Cruiser2 implements Unit {
    name = "Cruiser 2";
    type: "ship" | "ground" | "structure" = "ship";
    destroyed = false;
    cost = 2;
    combat = 6;
    move = 3;
    capacity = 1;
    upgradeMaterials = [
        new ResearchGreen(),
        new ResearchYellow(),
        new ResearchRed(),
    ];
    upgrade() {
        return new Cruiser2();
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
