

"use strict";
var letter = ["a", "b", "c", "d", "e", "f", "g"]

function sort(ar) {
    var newLetter = [];
    for (var i = letter.length - 1; i >= 0; i--) {
        newLetter.push(ar[i])
    }
    return newLetter
}

var res = sort(letter)
console.log(res)