import Race from './Race';

class Orc extends Race {
  static orcInstances = 0;
  private _maxLifePoints: number;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.orcInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static override createdRacesInstances(): number {
    return Orc.orcInstances;
  }
}

export default Orc;