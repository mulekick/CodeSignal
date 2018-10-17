function findEmailDomain(address) {
    var pos = address.lastIndexOf("@");
    return address.substr(++pos);
}
