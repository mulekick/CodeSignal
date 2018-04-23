function tennisSet(score1, score2) {
    if (score1 > 7 || score2 > 7) return false;
    var t = Math.abs(score2 - score1); 
	return (score1 == 7 || score2 == 7) ? t >= 1 && t <= 2 : t > 1;
}
