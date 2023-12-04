import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private static rangerInstances = 0;
  private _energyType: EnergyType;
    
  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger.rangerInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static override createdArchetypeInstances(): number {
    return Ranger.rangerInstances;
  }
}

export default Ranger;