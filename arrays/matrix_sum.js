const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
let sum = 0;
for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[i].length; j++) {
        sum += matrix[i][j];
    }
}
console.log(sum);
