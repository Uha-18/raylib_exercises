function fibonnaci(noOfelement) {
    if (noOfelement === 0) return [];

    if (noOfelement === 1) return [0];

    const array = [0, 1];

    for (i = 2; i < noOfelement; i++) {
        const sum = array[i - 1] + array[i - 2];
        array.push(sum);
    }

    return array;
}

console.log(fibonnaci(0));
console.log(fibonnaci(5));
console.log(fibonnaci(1));
