function col(n) {
    if (n < 1) {
        return "";
    }
    return "*" + col(n - 1);
}
function pattern(n) {
    if (n < 1) {
        return "";
    }
    return `${col(n)}\n${pattern(n - 1)}`;
    // return `${pattern(n - 1)}\n${col(n)}`;
}
function pattern1(n) {
    if (n < 1) {
        return "";
    }
    return `${pattern1(n - 1)}\n${col(n)}`;
    //   return `${col(n)}\n${pattern(n - 1)}`;
}

function main(n) {
    let a = pattern(n);
    let b = pattern1(n - 1);
    return b + "\n" + a;
}
console.log(main(4));
