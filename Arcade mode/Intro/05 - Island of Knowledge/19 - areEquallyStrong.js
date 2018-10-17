function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    return (yourLeft == yourRight || friendsLeft == friendsRight) ? (yourLeft == yourRight && friendsLeft == friendsRight && yourLeft == friendsLeft) : (yourLeft == friendsLeft || yourLeft == friendsRight) && (yourRight == friendsLeft || yourRight == friendsRight);
}
