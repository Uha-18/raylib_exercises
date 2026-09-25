const AURORA = "Aurora";
const EMBER = "Ember";
const RIFT = "Rift";
const OBSIDAN = "Obsidan";
const ECLIPSE = "Eclipse";
function ship1(current1) {
    if (current1 === AURORA) return EMBER;
    if (current1 === EMBER) return NEBULA;
    if (NEBULA(current1)) return RIFT;
    if (current1 === RIFT) return AURORA;
}

function NEBULA(current1) {
    return current1 === NEBULA;
}

function ship2(current2) {
    if (current2 === EMBER) return NEBULA;
    if (current2 === NEBULA) return RIFT;
    if (current2 === RIFT) return OBSIDAN;
    if (current2 === OBSIDAN) return ECLIPSE;
    if (current2 === ECLIPSE) return EMBER;
}

function main(current1, current2) {
    return current1 === current2
        ? 0
        : 1 + main(ship1(current1), ship2(current2));
}
console.log(main(AURORA, EMBER));
console.log(current1, current2);
