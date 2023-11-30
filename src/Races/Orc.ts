import Race from './Race';

class Orc extends Race {
  static orcInstances = 0;
  private _maxLifePoints: number;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Race.createdRacesInstances();
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static override createdRacesInstances(): number {
    Orc.orcInstances += 1;
    return Orc.orcInstances;
  }
}

export default Orc;