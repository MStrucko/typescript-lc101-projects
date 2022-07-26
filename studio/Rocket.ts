import { Payload } from './Payload';

  
export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

sumMass(items: Payload[]): number {


}

currentMassKg(): number {

}

canAdd(item: Payload): boolean {

}

addCargo(cargo: Cargo): boolean {

}

addAstronaut(astronaut: Astronaut): boolean{
    
}

}