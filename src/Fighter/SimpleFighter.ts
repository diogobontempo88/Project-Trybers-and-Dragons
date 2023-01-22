export default interface SimpleFighter {
  lifePoints: number;
  strength: number;
  
  attack(param: Enemy): void;

  receiveDamage(param: AttackPoints): number;
}
  
export type Enemy = SimpleFighter;

export type AttackPoints = number;