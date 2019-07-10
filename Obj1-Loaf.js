
//Drill 1 of Object Drills
'use strict';

const loaf = {
    flour: '6 level cups',
    water: '1.5 cups',
    yeast: '1 packet, or 2 tsp',
    salt: '1.5 tsp',
    sugar: '1 pinch to yeast',

    recipe: function() {
        return(this.water / this.flour / this.yeast / this.salt / this.sugar)
    }
};

console.log(loaf.flour, loaf.water, loaf.yeast, loaf.salt, loaf.sugar)
console.log(loaf.recipe)