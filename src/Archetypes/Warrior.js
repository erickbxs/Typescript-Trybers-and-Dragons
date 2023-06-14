"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetypes_1 = require("./Archetypes");
class Warrior extends Archetypes_1.default {
    constructor(name) {
        super(name);
        this._energyType = 'stamina';
        Warrior._numberOfInstances += 1;
    }
    get energyType() {
        return this._energyType;
    }
    static createdArchetypeInstances() {
        return this._numberOfInstances;
    }
}
exports.default = Warrior;
Warrior._numberOfInstances = 0;
