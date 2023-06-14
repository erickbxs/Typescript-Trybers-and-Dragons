"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetypes_1 = require("./Archetypes");
class Ranger extends Archetypes_1.default {
    constructor(name) {
        super(name);
        this._energyType = 'stamina';
        Ranger._numberOfInstances += 1;
    }
    get energyType() {
        return this._energyType;
    }
    static createdArchetypeInstances() {
        return this._numberOfInstances;
    }
}
exports.default = Ranger;
Ranger._numberOfInstances = 0;
