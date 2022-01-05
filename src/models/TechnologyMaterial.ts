export interface TechnologyMaterial {
    color: "green" | "yellow" | "blue" | "red";
    count: number;
}

export class ResearchGreen implements TechnologyMaterial {
    readonly color: "green";
    count: number;
    constructor(count: number = 1) {
        this.count = count;
    }
}
export class ResearchYellow implements TechnologyMaterial {
    readonly color: "yellow";
    count: number;
    constructor(count: number = 1) {
        this.count = count;
    }
}
export class ResearchBlue implements TechnologyMaterial {
    readonly color: "blue";
    count: number;
    constructor(count: number = 1) {
        this.count = count;
    }
}
export class ResearchRed implements TechnologyMaterial {
    readonly color: "red";
    count: number;
    constructor(count: number = 1) {
        this.count = count;
    }
}
