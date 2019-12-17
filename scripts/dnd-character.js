
export function abilityModifier(abilityScore)
{
  if (abilityScore < 3)  {
    throw('Ability scores must be at least 3');
  } 
  else if (abilityScore > 18) {
    throw('Ability scores can be at most 18');
  }
  else
  {
    return Math.floor((abilityScore - 10) / 2);
  }
}

export class Character {

  constructor ()
  {
    this.strength = Character.rollAbility();
    this.dexterity = Character.rollAbility();
    this.constitution = Character.rollAbility();
    this.intelligence = Character.rollAbility();
    this.wisdom = Character.rollAbility();
    this.charisma = Character.rollAbility();
    this.hitpoints = 10 + abilityModifier(this.constitution);
  }

  static rollAbility() {
    var dice = [];
    for (var i = 0; i < 4; i++)
    {
      dice.push(Math.floor(Math.random() * 6) + 1);
    }
    var value = 0;
    for (var d of dice)
    {
      value += parseInt(d);
    }
    value -= Math.min(...dice);
    return value;
  }
};
