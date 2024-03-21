// Your code here
function lyricsGenerator(myArray) {
    let frase = "";
    let countOne = 0;
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] == 0) {
            frase += "Boom ";
            countOne = 0;
        } else if (myArray[i] == 1) {
            frase += "Drop the bass ";
            countOne += 1;
        } if (countOne === 3) {
            frase += "!!!Break the bass!!! "
        }
    }
    return frase;
}

// Don't change anything below this line
console.log(lyricsGenerator([0, 0, 1, 1, 0, 0, 0]))
console.log(lyricsGenerator([0, 0, 1, 1, 1, 0, 0, 0]))
console.log(lyricsGenerator([0, 0, 0]))
console.log(lyricsGenerator([1, 0, 1]))
console.log(lyricsGenerator([1, 1, 1]))
