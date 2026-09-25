// even sequence

// function odd(number) {
//     if (number < 1) {
//         return;
//     }
//     if (number % 2 !== 0) {
//         console.log(number);
//         return odd(number - 2);
//     }
//     return odd(number - 1);
// }
// console.log(odd(5));

// sum

function odd(number) {
    if (number < 1) {
        return 0;
    }
    if (number % 2 !== 0) {
        return number + odd(number - 2);
    }
    return odd(number - 1);
}
console.log(odd(7));
