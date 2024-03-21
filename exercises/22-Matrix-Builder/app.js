// Your code here
function matrixBuilder(numero) {
    let matrix = [];
    for (let i = 0; i < numero; i++) {
        matrix[i] = [];
        for (let j = 0; j < numero; j++) {
            matrix[i][j] = Math.round(Math.random());
        }
    }
    return matrix;
}


// Do not change anything from this line down
console.log(matrixBuilder(5))
