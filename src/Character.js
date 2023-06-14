"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetypes_1 = require("./Archetypes");
const Races_1 = require("./Races");
const utils_1 = require("./utils");
class Character {
    constructor(name) {
        this._race = new Races_1.Elf(name, (0, utils_1.default)(1, 10));
        this._archetype = new Archetypes_1.Mage(name);
        this._maxLifePoints = this._race.maxLifePoints / 2;
        this._lifePoints = this._maxLifePoints;
        this._strength = (0, utils_1.default)(1, 10);
        this._defense = (0, utils_1.default)(1, 10);
        this._dexterity = this._race.dexterity;
        this._energy = {
            type_: this._archetype.energyType,
            amount: (0, utils_1.default)(1, 10),
        };
    }
    get race() {
        return this._race;
    }
    get archetype() {
        return this._archetype;
    }
    get lifePoints() {
        return this._lifePoints;
    }
    get strength() {
        return this._strength;
    }
    get defense() {
        return this._defense;
    }
    get dexterity() {
        return this._dexterity;
    }
    get energy() {
        return {
            type_: this._energy.type_,
            amount: this._energy.amount,
        };
    }
    _lostLifePoints(damage) {
        this._lifePoints -= damage;
    }
    _conditionForLostLifePoints(damage) {
        if (this.lifePoints - damage > 0)
            return this._lostLifePoints(damage);
        this._lifePoints = -1;
    }
    receiveDamage(attackPoints) {
        const damage = attackPoints - this._defense;
        if (damage > 0)
            this._conditionForLostLifePoints(damage);
        return this._lifePoints;
    }
    attack(enemy) {
        enemy.receiveDamage(this._strength);
    }
    _incrementeMaxLifePoints(incrementValue) {
        if (this._maxLifePoints + incrementValue < this._race.maxLifePoints) {
            this._maxLifePoints += incrementValue;
            return;
        }
        this._maxLifePoints = this._race.maxLifePoints;
    }
    _incrementEnergy() {
        this._energy.amount = 10;
    }
    _incrementStrength(incrementValue) {
        this._strength += incrementValue;
    }
    _incrementDexterity(incrementValue) {
        this._dexterity += incrementValue;
    }
    _incrementDefense(incrementValue) {
        this._defense += incrementValue;
    }
    levelUp() {
        this._incrementeMaxLifePoints((0, utils_1.default)(1, 10));
        this._incrementStrength((0, utils_1.default)(1, 10));
        this._incrementDexterity((0, utils_1.default)(1, 10));
        this._incrementDefense((0, utils_1.default)(1, 10));
        this._incrementEnergy();
        this._lifePoints = this._maxLifePoints;
    }
    special(enemy) {
        const specialDamage = this._strength * 3;
        enemy.receiveDamage(specialDamage);
    }
}
exports.default = Character;
