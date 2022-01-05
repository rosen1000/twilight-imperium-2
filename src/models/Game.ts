import { EventEmitter } from "events";

export class Game {
    static event = new EventEmitter();
    static end = {
        battle() {
            Game.event.emit("endBattle");
        },
    };
}
