import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private static necromancerInstances = 0;
  private _energyType: EnergyType;
    
  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer.necromancerInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static override createdArchetypeInstances(): number {
    return Necromancer.necromancerInstances;
  }
}

export default Necromancer;