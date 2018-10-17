function variableName(name) {

    //In memory of Stephen Hawking
    
    return (name.match(/\w/g).join("") === name && name.charAt(0).match(/\d/) === null)

}