
//Object drill 6 - LOTR Character Creation
'use strict';
/*
const characterSet = function(characterSet) {
    return {
        name: characterObj.name,
        shortName: characterObj.firstName,
        race: characterObj.race,
        placeOfOrigin: characterObj.origin,
        atk: characterObj.attack,
        def: characterObj.defense,
        describe: function() {
            return `${this.name} is a ${this.race} from ${this.origin}.`;
        },
        fightResults: function(foe) {
            const defenseStrength = this.defense - foe.attack;
            const attackStrength = this.attack - foe.defense;
                if (attackStrength > 0) {
            return `We emerge VICTORIOUS and takes ${attackStrength} damage and you receive ${defenseStrength} > 0 ? 0 : Math.abs(defenseStrength)} damage`;
                }
                else {
            return `You wish you could defeat me!' you deliver 0 damage and take $[defenseAttack > 0 ? 0 : Math.abs(defenseAttack)] damage` ;
            }
        
        }
    };
};

let charAttribs = [
    {
        name:           'Gandalf the White',
        shortName:      'Olórin',
        race:           'Maia - Spirit',
        placeOfOrigin:  'Valinor',
        atk:             25,
        def:             10
    },
    {
    name:              'Frodo Baggins',
        shortName:      'Frodo',
        race:           'Hobbit - Halfling',
        placeOfOrigin:  'Shire',
        atk:             11,
        def:             15
},
{
    name:              'Gimli Durin',
        shortName:      'Gimli',
        race:           'Dwarf - Warrior',
        placeOfOrigin:  'Thorin`s Hall',
        atk:             18,
        def:             22
},{
    name:               'Aragorn Son of Arathorn',
        shortName:      'Aragorn',
        race:           'Human - Ranger',
        placeOfOrigin:  'Dunnedain',
        atk:             35,
        def:             14
},
{
    name:               'Legolas',
        shortName:      'Olórin',
        race:           'Sindarin Elf of the Woodland Realm',
        placeOfOrigin:  'Rivendell',
        atk:             30,
        def:             9

    },
]
*/

function Character(name, shortName, race, origin, attack, defense) {
    this.name = name;
    this.shortName = shortName;
    this.race = race;
    this.origin = origin;
    this.attack = attack;
    this.defense = defense;
  }
  
  Character.prototype.describe = function() {
    let sentence = `${this.name} is a ${this.race} from ${this.origin}`;
    this.weapon ? console.log(`${sentence} who uses ${this.weapon}`) : console.log(sentence)
  };
  
  Character.prototype.Fight = function(character) {
    let x = this.attack - character.defense;
    let y = character.attack - this.defense;
    if (x < 0) x = 0;
    if (y < 0) y = 0;
    return `Your opponent takes ${x} damage and you receive ${y} damage`;
  };
  
  Character.prototype.equipWeapon = function(weapon) {
    this.weapon = weapon;
  };
  
  
  let characters = [
    new Character('Gandalf the White','gandalf', 'Wizard', 'Middle Earth', 25, 15),
    new Character('Gimli', 'Gimli', 'Dwarf', 'The house of Durin', 12, 16),
    new Character('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 14, 18),
    new Character('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 35, 30),
    new Character('Legolas', 'legolas', 'Wood Elf', 'Woodland Realm', 34, 36)
  ];
  
  characters.push(new Character('Sauron', 'Sauron', 'Necromancer', 'Mordor', 50, 34,));
  
  characters.find(name => name.shortName === 'aragorn').describe();
  // console.log(characters);
  
  let hobbits = characters.filter(name => name.race === 'Hobbit');
  // console.log(hobbits);
  
  let higherThanFive = characters.filter(name => name.attack > 5);
  // console.log(higherThanFive);
  
  characters.find(name => name.shortName === 'aragorn').equipWeapon('Anduril');
  characters.find(name => name.shortName === 'aragorn').describe();

  console.log(characters[1]);
