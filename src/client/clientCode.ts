import { FurnitureFactory, ModernFurnitureFactory, VictorianFurnitureFactory } from '../factories/abstractFactory';
import { Prototype, ConcretePrototype } from '../factories/prototypeFactory';

function useFurniture(factory: FurnitureFactory) {
    const chair = factory.createChair();
    const sofa = factory.createSofa();
    const table = factory.createTable();
    
    console.log(chair.sitOn());
    console.log(sofa.lieOn());
    console.log(table.placeItems());
}

const victorianFactory = new VictorianFurnitureFactory();
const modernFactory = new ModernFurnitureFactory();

console.log("Using Victorian furniture:");
useFurniture(victorianFactory);

console.log("Using Modern furniture:");
useFurniture(modernFactory);

function usePrototype(prototype: Prototype) {
    const clone = prototype.clone();
    console.log('Original:', prototype);
    console.log('Clone:', clone);
}

// Example usage of Prototype
const originalPrototype = new ConcretePrototype("Initial Prototype");
usePrototype(originalPrototype);
