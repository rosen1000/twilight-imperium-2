import { UnitAbility } from "../Unit";

export class Bombardment implements UnitAbility {
    name: "Bombardment";
    activate() {
        // TODO
    }
    constructor(public value: number, public roll: number = 1) {}
}
