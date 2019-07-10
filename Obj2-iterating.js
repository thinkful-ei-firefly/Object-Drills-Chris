
//Drill 2 of Object Drills
'use strict';

const obj = {
    foo: 20,
    bar: 45,
    fum: 'Fee fi fo',
    quux: 'I smell the blood of a newbie coder',
    Spam: 93,
};

function loop(obj) {
    for (const key in obj) {
        console.log(key, obj[key]);
    }
}
//loop(obj);

