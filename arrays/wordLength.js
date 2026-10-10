function map(words) {
    const wordLength = [];
    for (i = 0; i < words.length; i++) {
        wordLength.push(words[i].length);
    }
    return wordLength;
}
console.log(map(["uha", "rabbit", "sandhya"]));
