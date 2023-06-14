import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _player2: Fighter;

  constructor(player: Fighter, player2: Fighter) {
    super(player);
    this._player2 = player2;
    super.fight();
  }

  private _battles() {
    while (this.player.lifePoints !== -1 && this._player2.lifePoints !== -1) {
      this._player2.attack(this.player);
      this.player.attack(this._player2);
    }
  }

  fight(): number {
    this._battles();

    return this.player.lifePoints === -1 ? -1 : 1;
  }
}