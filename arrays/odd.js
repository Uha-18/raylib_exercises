function oddarray(numbers) {
    const odd = [];
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            odd.push(numbers[i]);
        }
    }
    return odd;
}

console.log(oddarray([3, 2, 4, 5, 7]));
console.log(oddarray([2, 4, 6]));
