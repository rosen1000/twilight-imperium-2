import { Unit } from "../Unit";
import { ResearchRed } from "../TechnologyMaterial";
import { AntiFighterBarrage } from "../UnitAbilities/AntiFighterBarrage";

export class Destroyer implements Unit {
    name = "Destroyer";
    type: "ship" | "ground" | "structure" = "ship";
    destroyed = false;
    cost = 1;
    combat = 9;
    move = 2;
    capacity = 0;
    upgradeMaterials = [new ResearchRed(2)];
    abilities = [new AntiFighterBarrage(9, 2)];
    hit() {
        return this.destroy();
    }
    destroy() {
        this.destroyed = true;
        return this;
    }
    upgrade() {
        return new Destroyer2();
    }
    constructor(public count: number = 1) {}
}

export class Destroyer2 implements Unit {
    name = "Destroyer 2";
    type: "ship" | "ground" | "structure" = "ship";
    destroyed = false;
    cost = 1;
    combat = 9;
    move = 2;
    capacity = 0;
    abilities = [new AntiFighterBarrage(6, 3)];
    hit() {
        return this.destroy();
    }
    destroy() {
        this.destroyed = true;
        return this;
    }
    constructor(public count: number = 1) {}
}
