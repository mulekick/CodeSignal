Array.prototype.indexOfMulti = function(a,b) {
	for (i=0;i<this.length;i++) {
		if	(a==this[i][b]) {return i;}
	}		
	return -1;
};
function rateLimit(sentBatches, receivedMessages, startingAllowance) {
	var arrresult = [];
	var temp;
	var message;
	var user;
	var index;
	var flagForBatchSending;
	var counterBatches = 0;
	var counterMessages = 0;
	var lastResetTime = 0;
	
	//Insert an integer (0) at the beginning of each array in sentBatches which identifies it as a sending event
	//Insert an integer (-1) column at the beginning of each array in receivedMessages which identifies it as a receiving event	
	var sentBatchesFlagged = sentBatches.map(function (arr) {arr.unshift(counterBatches, 0); counterBatches++; return arr});
	var receivedMessagesFlagged = receivedMessages.map(function (arr) {arr.unshift(counterMessages, -1); counterMessages++; return arr});
		
	//Merge sentBatches and receivedMessages into a single array of arrays of integers (messagingEvents)
	//Order by first column ascending (unix timestamp) ...
	//index 0 = initial array index
	//index 1 = data type
	//index 2 = timestamp
	var messagingEvents = sentBatchesFlagged.concat(receivedMessagesFlagged); 
	messagingEvents.sort(Comparator);
		
	//Create an array of arrays designed to store the current value of per user rate limit, ordered by user ID (userIDs)
	var userIDs = [];
	
	//Initialisation of last reset time
	lastResetTime = timestampNextMidnight(messagingEvents[0][2]);
	
	//Loop through messagingEvents; for each event, perform the following operations :
	for (message = 0; message < messagingEvents.length; message++) {
		if (messagingEvents[message][2] >= lastResetTime) {
			//console.log("Resetting rates at " + messagingEvents[message][2])
			lastResetTime = timestampNextMidnight(messagingEvents[message][2]);
			//UserIDs[n][1] where n >= 0 (Array.prototype.map()) are reset to startingAllowance
			userIDs = userIDs.map (function (arr) {
				arr[1] = startingAllowance;
				return arr
			});
		}	
		//Initialize flagForBatchSending = True
		flagForBatchSending = true;
		//Loop through senders/recipients IDs :
		for (user = 3; user < messagingEvents[message].length; user++) {
			index = userIDs.indexOfMulti(messagingEvents[message][user], 0);
			if (index == -1) {
				//If unknown user IDs, append to userIDs :
				temp = [messagingEvents[message][user], startingAllowance];
				userIDs.push(temp);
                //console.log(messagingEvents[message][2] + " >> creating user " + messagingEvents[message][user] + " rate = " + startingAllowance)
			} else {			
				//If known user IDs :
				if ((messagingEvents[message][1] == 0) && (userIDs[index][1] == 0)) {
					//If sending event and userID per user rate limit = 0, flagForBatchSending = false
					flagForBatchSending = false;
				}
			}
		}		
		//If flagForBatchSending = true, update per user rate limit :
		if (flagForBatchSending == true) {	
			//Loop through senders/recipients IDs :
			for (user = 3; user < messagingEvents[message].length; user++) {
				index = userIDs.indexOfMulti(messagingEvents[message][user], 0);
				if (index == -1) {
					//Impossible
				} else {			
					if (messagingEvents[message][1] == 0) {
						//If sending event ==> 
						//userID per user rate limit = userID per user rate limit - 1	
						userIDs[index][1] = userIDs[index][1] - 1;
                        //console.log(messagingEvents[message][2] + " >> decrementing rate of user " + messagingEvents[message][user] + " rate = " + userIDs[index][1])
					} else if (messagingEvents[message][1] == -1) {	
						//If receiving event ==> userID per user rate limit = userID per user rate limit + 1
						userIDs[index][1] = userIDs[index][1] + 1;
						//console.log(messagingEvents[message][2] + " >> incrementing rate of user " + messagingEvents[message][user] + " rate = " + userIDs[index][1])
					}
				}
			}
		}
		//Store result if fail
		if (flagForBatchSending == false) {	
			//Append index of timestamp for current event in sentBatches to array of results
			arrresult.push(messagingEvents[message][0]);
		}
	}
	//Return array of results
	return arrresult;
}
function Comparator(a, b) {
   if (a[2] < b[2]) return -1;
   if (a[2] > b[2]) return 1;
   if (a[1] < b[1]) return -1;
   if (a[1] > b[1]) return 1;
   if (a[0] < b[0]) return -1;
   if (a[0] > b[0]) return 1;
   return 0;
}
function timestampNextMidnight(timestamp) {
	return timestamp + 86400 - (timestamp % 86400)
}