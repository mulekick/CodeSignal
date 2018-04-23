function depositProfit(deposit, rate, threshold) {

	var balance = deposit;
	var counter = 0;
	while (balance < threshold) {
		balance += balance * rate / 100;
		counter++;
	}
	return counter;

}
