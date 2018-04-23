function almostIncreasingSequence(sequence) {
	var bad = 0;
	for(var counter = 1; counter < sequence.length; counter++){
		if (sequence[counter] <= sequence[counter-1]) {
			bad++;
			if (bad > 1) return false;
			if (sequence[counter] <= sequence[counter-2] && sequence[counter+1] <= sequence[counter-1]) return false;
		}
	}
	return true
}
