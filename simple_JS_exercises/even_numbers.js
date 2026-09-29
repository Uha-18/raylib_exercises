function even(max, n = 2) {
    if (n <= max) {
        console.log(n);
        even(max, n + 2);
    }
}
even(10);
