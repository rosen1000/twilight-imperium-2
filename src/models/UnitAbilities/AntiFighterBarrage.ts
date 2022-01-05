import { UnitAbility } from "../Unit";
import { Game } from "../Game";

export class AntiFighterBarrage implements UnitAbility {
    name = "Anti-Fighter Barage";
    activate() {}
    constructor(public value: number, public rolls: number) {}
}
