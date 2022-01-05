import { TechnologyMaterial } from "./TechnologyMaterial";

export interface Unit {
    name: string;
    type: "ship" | "ground" | "structure";
    damaged?: boolean;
    destroyed: boolean;
    cost: number;
    combat: number | Array<number>;
    move: number;
    capacity: number;
    count: number;
    upgradeMaterials?: Array<TechnologyMaterial>;
    abilities?: Array<UnitAbility>
    hit(): this;
    destroy(): this;
    upgrade?(): Unit;
}

export interface UnitAbility {
    name: string;
    activate();
}
