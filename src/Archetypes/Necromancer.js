"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetypes_1 = require("./Archetypes");
class Necromancer extends Archetypes_1.default {
    constructor(name) {
        super(name);
        this._energyType = 'mana';
        Necromancer._numberOfInstances += 1;
    }
    get energyType() {
        return this._energyType;
    }
    static createdArchetypeInstances() {
        return this._numberOfInstances;
    }
}
exports.default = Necromancer;
Necromancer._numberOfInstances = 0;
