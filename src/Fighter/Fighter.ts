import Energy from '../Energy';

export default interface Fighter {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy;

  attack(param: Enemy): void;

  special?(param: Enemy): void;

  levelUp(): void;

  receiveDamage(param: AttackPoints): number;

}

export type Enemy = Fighter;

export type AttackPoints = number;