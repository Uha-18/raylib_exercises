console.log(
    findLastIndex(["apple", "coffee", "coffee", "coffee", "coffee"], "pen"),
);

function findLastIndex(array, element) {
    const noElements = -1;
    for (i = array.length - 1; i >= 0; i--) {
        if (element === array[i]) {
            return i;
        }
    }
    return noElements;
}
