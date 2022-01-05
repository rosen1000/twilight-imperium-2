import { Faction, Command } from "../Faction";
import { Unit } from "../Unit";
import { Techology } from "../Technolgy";
import { Planet } from "../Planet";
import { Strategy } from "../Strategy";
import { Dreadnought } from "../Units/Dreadnought";

export class TheBaronyOfLetnev implements Faction {
    name: string = "The Barony of Letnev";
    commodities: number = 0;
    readonly maxCommodities: number = 2;
    passiveEffects: Array<string>;
    units: {
        flagship: Unit;
        warSun: Unit;
        cruiser: Unit;
        dreadnought: Unit;
        destroyer: Unit;
        PDS: Unit;
        carrier: Unit;
        fighter: Unit;
        infantry: Unit;
        spaceDock: Unit;
    };
    command = new Command();
    technology: Array<Techology>;
    planets: Array<Planet>;
    strategy: Strategy | Array<Strategy>;
    constructor() {
        this.units.flagship;
        this.units.warSun;
        this.units.cruiser;
        this.units.dreadnought = new Dreadnought();
        this.units.destroyer;
        this.units.PDS;
        this.units.carrier;
        this.units.fighter;
        this.units.infantry;
        this.units.spaceDock;
    }
}
