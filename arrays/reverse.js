function reverse(array) {
    const reverse = [];
    for (i = 0; i < array.length; i++) {
        reverse.unshift(array[i]);
    }
    return reverse;
}
console.log(reverse([2, 2, 4, 5, 6]));
