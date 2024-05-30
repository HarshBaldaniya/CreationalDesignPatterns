// Define the Prototype interface
export interface Prototype {
    clone(): Prototype;
}

// Concrete Prototype class
export class ConcretePrototype implements Prototype {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    clone(): this {
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    }
}
