import { Unit } from "../Unit";
import { ResearchGreen, ResearchBlue } from "../TechnologyMaterial";

export class Fighter implements Unit {
    name = "Fighter";
    type: "ship" | "ground" | "structure" = "ship";
    destroyed = false;
    cost = 1;
    combat = 9;
    move = 0;
    capacity = 0;
    upgradeMaterials = [new ResearchGreen(), new ResearchBlue()];
    upgrade() {
        return new Fighter2();
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

export class Fighter2 implements Unit {
    name = "Fighter 2";
    type: "ship" | "ground" | "structure" = "ship";
    destroyed = false;
    cost = 1;
    combat = 8;
    move = 2;
    capacity = 0;
    hit() {
        return this.destroy();
    }
    destroy() {
        this.destroyed = true;
        return this;
    }
    constructor(public count: number = 1) {}
}
