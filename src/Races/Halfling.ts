import Race from './Race';

class Halfling extends Race {
  static halflingInstances = 0;
  private _maxLifePoints: number;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.createdRacesInstances();
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static override createdRacesInstances(): number {
    Halfling.halflingInstances += 1;
    return Halfling.halflingInstances;
  }
}

export default Halfling;