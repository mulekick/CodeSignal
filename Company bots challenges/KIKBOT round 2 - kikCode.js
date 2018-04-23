function kikCode(userId) {
	var arrresults = [];
    var userBits = pad(parseInt(userId, 10).toString(2), 52).split("").reverse().join("");
	//console.log(userBits);
	var numSectorsByCircle = [3, 4, 8, 10, 12, 15];
	var sectorDegreeByCircle = [120, 90, 45, 36, 30, 24];
    var bitsByCircle = [];
	bitsByCircle.push(userBits.substring(0, 3));
	bitsByCircle.push(userBits.substring(3, 7));
	bitsByCircle.push(userBits.substring(7, 15));
	bitsByCircle.push(userBits.substring(15, 25));
	bitsByCircle.push(userBits.substring(25, 37));
	bitsByCircle.push(userBits.substring(37, 52));
	//console.log(bitsByCircle.toString());
	var arrayCurrentCircle; var sectorStart; var sectorEnd; var currentSector; var arrCurrentResults;
	for (circle = 0; circle < bitsByCircle.length; circle++) {
		//console.log(getSegmentArray(bitsByCircle[circle]).toString());
		arrayCurrentCircle = getSegmentArray(bitsByCircle[circle]);
		arrCurrentResults = [];
		//Scan the segments for current circle
		currentSector = 0;
		sectorStart = 0;
		sectorEnd = 0;
		for (segment = 0; segment < arrayCurrentCircle.length; segment++) {
			//console.log(arrayCurrentCircle[segment]);
			//Find segment to save ...
			if (arrayCurrentCircle[segment].indexOf("1") != -1) {
				sectorStart = currentSector;
				sectorEnd = currentSector + arrayCurrentCircle[segment].length;
				currentSector += arrayCurrentCircle[segment].length; 
				//console.log(currentSector + " " + sectorStart + " " + sectorEnd);
				arrCurrentResults.push([[circle + 1, sectorStart * sectorDegreeByCircle[circle]], [circle + 1, sectorEnd * sectorDegreeByCircle[circle]]])
				//console.log([[circle + 1, sectorStart * sectorDegreeByCircle[circle]], [circle + 1, sectorEnd * sectorDegreeByCircle[circle]]]);
			} else {
				currentSector += arrayCurrentCircle[segment].length; 
				//console.log(currentSector + " " + sectorStart + " " + sectorEnd);
			}
 		}
		//Exception : array leading and ending elements are 1's
		if (typeof arrCurrentResults !== 'undefined' && arrCurrentResults.length > 0) {
            //console.log(arrCurrentResults.toString());
			var upperbound = arrCurrentResults.length - 1;
			//console.log(arrCurrentResults[0][0][1].toString());
			//console.log(arrCurrentResults[upperbound][1][1].toString());
			if ((arrCurrentResults.length > 1) && (arrCurrentResults[0][0][1] == 0) && (arrCurrentResults[upperbound][1][1] == 360)) {
				//console.log("Exception at circle " + circle);
				var temp = [[circle + 1, arrCurrentResults[upperbound][0][1]], [circle + 1, arrCurrentResults[upperbound][1][1] + arrCurrentResults[0][1][1]]];
				//console.log(temp.toString());
				arrCurrentResults.shift();
				arrCurrentResults.pop();
				arrCurrentResults.push(temp);
			}
			for (counter = 0; counter < arrCurrentResults.length; counter++) {
				arrresults.push(arrCurrentResults[counter]);
			}
		} 
		
		//console.log(arrCurrentResults.toString());
	}
	return arrresults;
}
function getSegmentArray(bits) {
	var counter = 0;
	var segment = "";
	var startbit = "";
	var segmentarray = [];
	while (counter < bits.length) {
		startbit = bits.charAt(counter);
		do {
			segment += bits.charAt(counter);
			counter++;
		} while (bits.charAt(counter) == startbit)
		segmentarray.push(segment);
		segment = "";
	}
	return segmentarray;
}
function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}