import { Unit } from "../Unit";
import { ResearchBlue, ResearchYellow } from "../TechnologyMaterial";
import { Game } from "../Game";
import { SustainDamage } from "../UnitAbilities/SustainDamage";
import { Bombardment } from "../UnitAbilities/Bombardment";

export class Dreadnought implements Unit {
    name = "Dreadnoght";
    type: "ship" | "ground" | "structure" = "ship";
    damaged = false;
    destroyed = false;
    cost: 4;
    combat: 5;
    move: 1;
    capacity: 1;
    count: number;
    upgradeMaterials = [new ResearchBlue(2), new ResearchYellow()];
    abilities = [new SustainDamage(), new Bombardment(5)];
    hit() {
        if (this.damaged) return this.destroy();
        this.damaged = true;
        return this;
    }
    destroy() {
        this.destroyed = true;
        return this;
    }
    upgrade() {
        return new Dreadnought2(this.count);
    }
    constructor(count: number = 1) {
        this.count = count;
        Game.event.on("endBattle", () => {
            this.damaged = false;
        });
    }
}

export class Dreadnought2 implements Unit {
    name = "Dreadnoght 2";
    type: "ship" | "ground" | "structure" = "ship";
    damaged: boolean;
    destroyed: boolean;
    cost: 4;
    combat: 5;
    move: 2;
    capacity: 1;
    count: number;
    abilities = [new SustainDamage(), new Bombardment(5)];
    hit() {
        if (this.damaged) return this.destroy();
        this.damaged = true;
        return this;
    }
    destroy() {
        this.destroyed = true;
        return this;
    }
    constructor(count: number = 1) {
        this.count = count;
        Game.event.on("endBattle", () => {
            this.damaged = false;
        });
    }
}