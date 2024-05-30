import { Chair, Sofa, Table } from "./furnitureInterfaces";
import { VictorianChair, VictorianSofa, VictorianTable } from "./victorianProducts";
import { ModernChair, ModernSofa, ModernTable } from "./modernProducts";

export interface FurnitureFactory {
    createChair(): Chair;
    createSofa(): Sofa;
    createTable(): Table;
}

export class VictorianFurnitureFactory implements FurnitureFactory {
    createChair(): Chair {
        return new VictorianChair();
    }

    createSofa(): Sofa {
        return new VictorianSofa();
    }

    createTable(): Table {
        return new VictorianTable();
    }
}

export class ModernFurnitureFactory implements FurnitureFactory {
    createChair(): Chair {
        return new ModernChair();
    }

    createSofa(): Sofa {
        return new ModernSofa();
    }

    createTable(): Table {
        return new ModernTable();
    }
}
