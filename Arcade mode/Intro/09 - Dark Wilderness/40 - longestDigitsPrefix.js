function longestDigitsPrefix(string) {
    return (string.search(/\D/) != -1) ? string.substring(0,string.search(/\D/)) : string;
}
