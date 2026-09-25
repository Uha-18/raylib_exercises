function sum(n) {
    if (n === 0) return;
    console.log(n);
    sum(n - 1);
}
sum(4);
