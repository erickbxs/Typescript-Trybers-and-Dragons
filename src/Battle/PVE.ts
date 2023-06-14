import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player: Fighter;
  private _enemies: SimpleFighter[] | Fighter[];

  constructor(player: Fighter, enemies: SimpleFighter[] | Fighter[]) {
    super(player);
    this._player = player;
    this._enemies = enemies;
    super.fight();
  }

  private _battles(enemy: SimpleFighter | Fighter) {
    while (this.player.lifePoints !== -1 && enemy.lifePoints !== -1) {
      this.player.attack(enemy);
      enemy.attack(this.player);
    }
  }

  private _BattlesInFight() {
    for (let i = 0; i < this._enemies.length; i += 1) {
      this._battles(this._enemies[i]);
    }
  }

  fight(): number {
    this._BattlesInFight();
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}