import { Chair, Sofa, Table } from "./furnitureInterfaces";

export class ModernChair implements Chair {
    sitOn(): string {
        return "Sitting on a sleek modern chair";
    }
}

export class ModernSofa implements Sofa {
    lieOn(): string {
        return "Lying on a minimalist modern sofa";
    }
}

export class ModernTable implements Table {
    placeItems(): string {
        return "Placing items on a streamlined modern table";
    }
}
