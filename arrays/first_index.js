console.log(findIndex(["apple", "cake", "tea", "coffee", "tea"], "uha"));

function findIndex(array, element) {
    const noElements = -1;
    for (i = 0; i < array.length; i++) {
        if (element === array[i]) {
            return i;
        }
    }
    return noElements;
}
