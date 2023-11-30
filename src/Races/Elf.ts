import Race from './Race';

class Elf extends Race {
  static elfInstances = 0;
  private _maxLifePoints: number;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.createdRacesInstances();
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static override createdRacesInstances(): number {
    Elf.elfInstances += 1;
    return Elf.elfInstances;
  }
}

export default Elf;