let row = 4;
for (i = 1; i <= row; i++) {
    let line = " ";
    for (let gap = 1; gap <= i - 1; gap++) {
        line += " ";
    }
    for (let star = 1; star <= 2 * (row - 1) + 1; star++) {
        line += "*";
    }
    console.log(line);
}
