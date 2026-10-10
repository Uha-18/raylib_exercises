function belowThreshold(array, Threshold) {
    const filteredArray = [];
    for (i = 0; i < array.length; i++) {
        if (array[i] < Threshold) {
            filteredArray.push(array[i]);
        }
    }
    return filteredArray;
}
console.log(belowThreshold([6, 2, 3, 1, 4, 7], 3));
console.log(belowThreshold([1, 2, 3], 0));
