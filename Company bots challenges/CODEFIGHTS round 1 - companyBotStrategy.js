function companyBotStrategy(trainingData) {

	var botAnswerTime = parseFloat("0.0");
	var correctAnswersTimesSum = 0;
	var correctAnswersNumber = 0;
	
	var counter;
	//For each training data
	for (counter = 0; counter < trainingData.length; counter++) {
		//If answer is correct
		if (trainingData[counter][1] == 1) {
			//Increment correct answers counter
			correctAnswersNumber++;
			//Add correct answer time to times sum
			correctAnswersTimesSum += trainingData[counter][0];
		}
	}
	//If at least one correct answer
	if (correctAnswersNumber > 0) {
		//Return the times average
		botAnswerTime = correctAnswersTimesSum / correctAnswersNumber;
	}

	return botAnswerTime;
	
}