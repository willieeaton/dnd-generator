const genButton = document.getElementById("generateButton");
const strField = document.getElementById("strengthField");
const dexField = document.getElementById("dexterityField");
const conField = document.getElementById("constitutionField");
const intField = document.getElementById("intelligenceField");
const wisField = document.getElementById("wisdomField");
const chaField = document.getElementById("charismaField");

function generateChar() {
  var newChar = new Character();
  strField.value = newChar.strength;
  dexField.value = newChar.dexterity;
  conField.value = newChar.constitution;
  intField.value = newChar.intelligence;
  wisField.value = newChar.wisdom;
  chaField.value = newChar.charisma;

}

function abilityModifier(abilityScore) {
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

class Character {

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

genButton.addEventListener("click", generateChar);