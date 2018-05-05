/*
You've been asked to program a bot for a popular bank that will automate the management of incoming requests. 
There are three types of requests the bank can receive:

    transfer i j sum: request to transfer sum amount of money from the ith account to the jth one;
    deposit i sum: request to deposit sum amount of money in the ith account;
    withdraw i sum: request to withdraw sum amount of money from the ith account.

Your bot should also be able to process invalid requests. There are two types of invalid requests:

    invalid account number in the requests;
    deposit / withdrawal of a larger amount of money than is currently available.

For the given list of accounts and requests, return the state of accounts after all requests have been processed, or an array of 
a single element [-<request_id>] (please note the minus sign), where <request_id> is the 1-based index of the first invalid request.

Example

    For accounts = [10, 100, 20, 50, 30] and
    requests = ["withdraw 2 10", "transfer 5 1 20", "deposit 5 20", "transfer 3 4 15"],
    the output should be bankRequests(accounts, requests) = [30, 90, 5, 65, 30].

    Here are the states of accounts after each request:
        "withdraw 2 10": [10, 90, 20, 50, 30];
        "transfer 5 1 20": [30, 90, 20, 50, 10];
        "deposit 5 20": [30, 90, 20, 50, 30];
        "transfer 3 4 15": [30, 90, 5, 65, 30], which is the answer.

    For accounts = [20, 1000, 500, 40, 90] and
    requests = ["deposit 3 400", "transfer 1 2 30", "withdraw 4 50"],
    the output should be bankRequests(accounts, requests) = [-2].

    After the first request, accounts becomes equal to [20, 1000, 900, 40, 90], but the second one 
	turns it into [-10, 1030, 900, 40, 90], which is invalid. Thus, the second request is invalid, and the answer is [-2]. 
	Note that the last request is also invalid, but it shouldn't be included in the answer.
*/	
	
function bankRequests(accounts, requests) {
	var request;
	var i;
	for (i = 0; i < requests.length; i++) {
		request = requests[i].split(" ").map((x,i) => (i == 0) ? x : parseInt(x));
		switch (request[0]) {		
			case "withdraw" :
				if (typeof accounts[request[1] - 1] == "undefined") {return [0 - Math.abs(i + 1)]}
				if (request[2] > accounts[request[1] - 1]) {
					return [0 - Math.abs(i + 1)];
				} else {
					accounts[request[1] - 1] -= request[2];
				}
			break;
			case "transfer" :
				if (typeof accounts[request[1] - 1] == "undefined" || typeof accounts[request[2] - 1] == "undefined") {return [0 - Math.abs(i + 1)]}
				if (request[3] > accounts[request[1] - 1]) {
					return [0 - Math.abs(i + 1)];
				} else {
					accounts[request[1] - 1] -= request[3];
					accounts[request[2] - 1] += request[3];
				}
			break;
			case "deposit" :
				if (typeof accounts[request[1] - 1] == "undefined") {return [0 - Math.abs(i + 1)]}
				accounts[request[1] - 1] += request[2];
			break;
			default :
			break;		
		}
	}
	return accounts;
}