function digit(number) {
    if (number < 10) {
        return number;
    }
    return digit((number - (number % 10)) / 10) + (number % 10);
}
console.log(digit(42452));
