//Properties that aren't there
'use strict';

const musician1 = {
    band: 'The Beatles',
    name: 'Paul McCartney',
    position: 'Bass Player, Piano, creator and singer',
    manager: 'boss1',
};

const musician2 = {
    band: 'The Beatles',
    name: 'George Harrison',
    position: 'Guitar Player and singer',
    manager: 'boss1',
};

const musician3 = {
    band: 'The Beatles',
    name: 'Ringo Starr',
    position: 'Drummer and singer',
    manager: 'boss1',
};

const musician4 = {
    band: 'The Beatles',
    name: 'John Lennon',
    position: 'Guitar, Piano, Genius, writer and singer',
    manager: 'boss1',
};

const musician5 = {
    band: 'The Beatles',
    name: 'Pete Best',
    position: 'Original Drummer from 1960 - 1962',
    manager: 'boss1',
};

const musician6 = {
    band: 'The Beatles',
    name: 'Yoko Ono',
    position: 'Band Destroyer, Disruptor, Negative Influencer, Evil Manipulator',
    manager: 'boss2',
};

const boss1 = {
    band: 'The Beatles',
    name: 'Brian Samuel Epstein',
    position: 'boss',
    manager: false
};

const boss2 = {
    band: 'The Beatles',
    name: 'Satan',
    position: 'Prince of Darkness, The Great Deceiver',
    manager: false

};

const newArr = [musician1, musician2, musician3, musician4, musician5, musician6, boss1, boss2];

function printNames(arr) {
    for (const key in arr){
      console.log(newArr[key].name, newArr[key].position);
    }
}

printNames(newArr);