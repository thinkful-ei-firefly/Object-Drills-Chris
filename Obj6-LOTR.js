
//Object drill 6 - LOTR Character Creation
'use strict';

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
},
{
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

