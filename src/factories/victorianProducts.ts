import { Chair, Sofa, Table } from "./furnitureInterfaces";

export class VictorianChair implements Chair {
    sitOn(): string {
        return "Sitting on a plush Victorian chair";
    }
}

export class VictorianSofa implements Sofa {
    lieOn(): string {
        return "Lying on an ornate Victorian sofa";
    }
}

export class VictorianTable implements Table {
    placeItems(): string {
        return "Placing items on a carved Victorian table";
    }
}
