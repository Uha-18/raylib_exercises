function aboveThreshold(array, Threshold) {
    const filteredArry = [];
    for (i = 0; i < array.length; i++) {
        if (array[i] > Threshold) {
            filteredArry.push(array[i]);
        }
    }
    return filteredArry;
}
console.log(aboveThreshold([6, 2, 3, 1, 4, 7], 3));
console.log(aboveThreshold([1, 2, 3], 4));
