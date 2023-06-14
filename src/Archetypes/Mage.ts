import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

export default class Mage extends Archetype {
  private _energyType: EnergyType;
  private static _numberOfInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage._numberOfInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this._numberOfInstances;
  }
}
