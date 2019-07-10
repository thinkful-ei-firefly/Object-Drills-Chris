//Cracking the Code - Property That is not there
'use strict';

//Cracking the code
/*
function cTCode(message) {
    const string = message.split(' ');
    const decipher = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
    }
};

const newArr = [];

for (const word of string) {
    const alphaOffset = string[word][0].charCodeAt() - 85;
    const letter = decipher[string[word][0]];
    if (alphaOffset <= 5) {
        const newLetter = string[word][letter];
        Array.push(newLetter);
    } else {
        Array.push(' ');
    }
    return Array.join(' ');
}
console.log(cTCode('craft block argon meter bell brown droop'));
*/

const sentenceCrack = function(str) {
    const words = str.split(' ');
    console.log(words);
        let firstStr = '';
            for (let word of words) {
            firstStr += decipher(word);
            }
    return firstStr;
}


const decipher = function(word) {
    let countTo = letNum(word[0]);
    if(countTo === 0) {
        return ' ';
    }
    return word[countTo-1];
}



const decipher = function(letter) {
    const letNum = {};
    letNum['a'] = 1,
    letNum['b'] = 2,
    letNum['c'] = 3,
    letNum['d'] = 4,
    if(letNum[letter] !== undefined) {
        return letNum[letter];
        } else  {
        return 0;
        }
}




