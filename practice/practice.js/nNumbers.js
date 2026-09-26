function sum(n) {
    if (n === 0) return;
    sum(n - 1);
    console.log(n);
}
sum(5);
