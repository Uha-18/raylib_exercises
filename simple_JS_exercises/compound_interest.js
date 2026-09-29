function compoundinterest(principal, time, rate, compound_frequency) {
    const rate = rate / 100;
    base = 1 + rate / compound_frequency;
    power = compound_frequency * time;
    total = principal * (base ** power);
    return console.log(total);
}
compoundinterest(2000, 3, 5, 2)