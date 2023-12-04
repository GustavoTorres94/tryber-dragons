import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private static mageInstances = 0;
  private _energyType: EnergyType;
    
  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage.mageInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static override createdArchetypeInstances(): number {
    return Mage.mageInstances;
  }
}

export default Mage;