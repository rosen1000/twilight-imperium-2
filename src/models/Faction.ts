import { Unit } from "./Unit";
import { Techology } from "./Technolgy";
import { Planet } from "./Planet";
import { Strategy } from "./Strategy";

interface Units {
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
}

export interface Faction {
    name: string;
    commodities: number;
    maxCommodities: number;
    passiveEffects: Array<string>; // TODO: Make passive effect functions or smth
    units: Units;
    command: Command;
    technology: Array<Techology>;
    planets: Array<Planet>;
    strategy: Strategy | Array<Strategy>;
}

export class Command {
    tactic: number;
    fleet: number;
    strategy: number;
    tradeGoods: number;
    getTokens() {
        return this.tactic + this.fleet + this.strategy;
    }
}
