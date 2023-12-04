import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private static warriorInstances = 0;
  private _energyType: EnergyType;
    
  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior.warriorInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static override createdArchetypeInstances(): number {
    return Warrior.warriorInstances;
  }
}

export default Warrior;