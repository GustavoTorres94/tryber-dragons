import { EnergyType } from '../Energy';

abstract class Archetype {
  private _special: number;
  private _cost: number;
  private static _archetypeInstances = 0;

  constructor(private _name: string) {
    this._name = _name;
    this._special = 0;
    this._cost = 0;
  }

  public get name(): string {
    return this._name;
  }

  public get special(): number {
    return this._special;
  }

  public get cost(): number {
    return this._cost;
  }

  public static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}

export default Archetype;