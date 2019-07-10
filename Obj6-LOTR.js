
//Object drill 6 - LOTR Character Creation
'use strict';

const characterSet = function(characterSet) {
    return {
        name: characterObj.name,
        shortName: characterObj.firstName,
        race: characterObj.race,
        placeOfOrigin: characterObj.origin
        atk: characterObj.attack,
        def: characterObj.defense,
        describe: function() {
            return `${this.name} is a ${this.race} from ${this.origin}.`;
        },
        fightResults: function(foe) {
            const defenseStrength = this.defense - foe.attack;
            const attackStrength = this.attack - foe.defense;
                if (attackStrength > 0) {
            return `We emerge VICTORIOUS and takes ${attackStrenght} damage and you receive ${defenseStrenght} > 0 ? 0 : Math.abs(defenseStrength)} damage`;
                }
                else {
            return `You wish you could defeat me!' you deliver 0 damamge and take $[defenseAttack > 0 ? 0 : Math.abs(defenseAttack)] damage` ;
            }
        
        }
    }
}
