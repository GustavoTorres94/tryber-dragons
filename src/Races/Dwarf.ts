import Race from './Race';

class Dwarf extends Race {
  private static dwarfInstances = 0;
  private _maxLifePoints: number;
    
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.createdRacesInstances();
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static override createdRacesInstances(): number {
    Dwarf.dwarfInstances += 1;
    return Dwarf.dwarfInstances;
  }
}

export default Dwarf;