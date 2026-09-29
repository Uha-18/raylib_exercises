function decimal_to_binary(decimal_number, base) {
    if (decimal_number === 0) {
        return
    }
    let remainder = decimal_number % base;
    let quotient = (decimal_number - remainder) / base;

    decimal_to_binary(quotient, base);
    console.log(remainder);
}
decimal_to_binary(2, 2)