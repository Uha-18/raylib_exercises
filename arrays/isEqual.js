const array1 = [1, 2, 3, 4];
const array2 = [1, 2, 3, 4];
function isEqual(array1, array2) {
    if (typeof array1[indices] === typeof array2[indices]) {
        return true;
    }
    if (array1[indices] === array1[indices]) {
        return true;
    }
}
for (indices = 0; indices < array1.length; indices++) {
    isEqual(array1[indices], array2[indices]);
}
console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4]));
console.log(isEqual([1, 2, 3], [1, 2, 3, 4]));
console.log(isEqual([1, 2, 3], [1, 3, 2]));
