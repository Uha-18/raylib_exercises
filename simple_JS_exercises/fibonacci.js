function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    let result = fibonacci(n - 2) + fibonacci(n - 1);
    return result;
}
console.log(fibonacci(6));
