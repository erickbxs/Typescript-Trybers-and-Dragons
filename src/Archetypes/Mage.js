"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetypes_1 = require("./Archetypes");
class Mage extends Archetypes_1.default {
    constructor(name) {
        super(name);
        this._energyType = 'mana';
        Mage._numberOfInstances += 1;
    }
    get energyType() {
        return this._energyType;
    }
    static createdArchetypeInstances() {
        return this._numberOfInstances;
    }
}
exports.default = Mage;
Mage._numberOfInstances = 0;
