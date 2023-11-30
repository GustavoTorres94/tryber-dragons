abstract class Race {
  static raceInstances = 0;

  constructor(private _name: string, private _dexterity:number) {
    this._name = _name;
    this._dexterity = _dexterity;
  }
  
  abstract get maxLifePoints(): number;

  public get name(): string {
    return this._name;
  }

  public get dexterity(): number {
    return this._dexterity; 
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }
}

export default Race;