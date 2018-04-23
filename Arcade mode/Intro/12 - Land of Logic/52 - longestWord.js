function longestWord(text) {
    return text.match(/\w+/g).sort((a,b) => b.length - a.length)[0];
}
