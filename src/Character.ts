import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy?: Energy | undefined;
  private _name: string;
  constructor(name: string) {
    this._name = name;
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf('Elflien', this._dexterity);
    this._archetype = new Mage('mage');
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = { amount: getRandomInt(1, 10), type_: 'mana' };
    this._lifePoints = this._maxLifePoints;
  }

  public get race(): Race {
    return this._race;
  }

  public get archetype(): Archetype {
    return this._archetype;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  public get defense(): number {
    return this._defense;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  public get energy(): Energy | undefined {
    if (this._energy) {
      const { amount, type_ } = this._energy;
      return { amount, type_ };
    }
    return undefined;    
  }
  
  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  special?(enemy: Fighter): void {
    if (this._energy && this._energy.amount > 5) {
      enemy.receiveDamage(this._strength * 2);
      this._energy.amount -= 1;
    }
  }

  levelUp(): void {
    this._strength += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    if (this._energy) this._energy.amount = 10;
    const newMaxLifePoints = this._maxLifePoints + getRandomInt(1, 10);
    if (newMaxLifePoints <= this._race.maxLifePoints) {
      this._maxLifePoints = newMaxLifePoints;
    } else {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    this._lifePoints = this._maxLifePoints;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) {
      this._lifePoints -= damage;
    }
    if (damage <= 0) {
      this._lifePoints -= 1;
    }
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }
}

export default Character;