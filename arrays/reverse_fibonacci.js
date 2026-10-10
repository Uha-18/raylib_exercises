function fibonnaci(noOfelement) {
    if (noOfelement === 0) return [];

    if (noOfelement === 1) return [0];

    const array = [1, 0];

    for (i = 2; i < noOfelement; i++) {
        const sum = array[0] + array[1];
        array.unshift(sum);
    }

    return array;
}

console.log(fibonnaci(0));
console.log(fibonnaci(5));
console.log(fibonnaci(7));
