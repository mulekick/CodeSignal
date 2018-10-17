// Warn if overriding existing method
if(Array.prototype.equals)
    console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});

//Initialize arrays
var arrFrom = [];
var arrTo = [];

function isVariableNameChar(charToCheck) {
    var pattern = /^[a-zA-Z0-9_]*$/;
    if (charToCheck.match(pattern)) {
        return true;
    } else {
        return false;
    }
}

function findAndReplace(strSource, arrToReplace, arrReplacement) {
    var result = "";
    var counter;
    var arrMapObj = [];
    for (counter = 0; counter < arrToReplace.length; counter++) {
        arrMapObj.push('"' + arrToReplace[counter] + '":"' + arrReplacement[counter] + '"');
    }   
    var strMapObj = "{" + arrMapObj.join(",") + "}";
    var mapObj = JSON.parse(strMapObj); 
    var re = new RegExp("\\b" + Object.keys(mapObj).join("\\b|\\b") + "\\b","gi");
    result = strSource.replace(re, function(matched){
        return mapObj[matched];
    });
    return result;
}

function plagiarismCheck(code1, code2) {
    
    var counter;
    var tmpResult;
    var result = true;
    
    //Not the same number of lines
    if (code1.length != code2.length) {
        return false;
    } else {
        for (counter = 0; counter < code1.length; counter++) {                  
            //If all lines are plagiarized, then code2 is a plagiarism of code1
            tmpResult = plagiarismLineCheck(code1[counter], code2[counter]);            
            console.log("Line " + counter + " is a plagiarism = " + tmpResult);
            result = result && tmpResult;
        }

        //Only if code 2 is still considered a plagiarism
        if (result) {
            //One last step is to reapply all replacement patterns to code1 and see if we can produce code 2
            tmpResult = [];
            for (counter = 0; counter < code1.length; counter++) {  
                tmpResult.push(findAndReplace(code1[counter], arrFrom, arrTo))
            }       
            //Add to the result
            result = result && tmpResult.equals(code2);     
        }
        
        console.log("From = " + arrFrom.join(" - "));
        console.log("To = " + arrTo.join(" - "));
        console.log("Code 2 is a plagiarism = " + result);
        
        return result;
    }
}

function plagiarismLineCheck(line1, line2) {

    //Initialize cursor position for line 1 = 0
    //Initialize cursor position for line 2 = 0
    var cursor1 = 0;
    var cursor2 = 0;
    //Initialize chars
    var char1;
    var char2;
    //Initialize buffers
    var varNameBuffer1 = "";
    var varNameBuffer2 = "";
    //Temporary replacement storage
    var tmpFrom;
    var tmpTo;
    //Other
    var counter;    

    //If the lines are equal...
    if (line1 == line2) {   
        return true;
    }

    //Execute
    do {
    
        if ((cursor1 == line1.length) && (cursor2 == line2.length)) {
            //If the end of the longest line is reached and no difference has been detected outside of :
            //1 - Replacements which match an existing replacement pattern
            //2 - Replacements which are new replacement patterns
            //AND
            //3 - Applying existing replacement patterns to line 1 produces line 2
            //Then the current line is a plagiarism, return true            
            
            if (findAndReplace(line1, arrFrom, arrTo) == line2) {
                return true;
            } else {
                return false;
            }
        }
        
        //Read a character from code 1 and store in char 1      
        //Read a character from code 2 and store in char 2
        char1 = line1.charAt(cursor1);
        char2 = line2.charAt(cursor2);
        
        //If char 1 != char 2
        if (char1 != char2) {
        
            //If neither char 1 nor char 2 are digits...
            if (isNaN(parseInt(char1)) && isNaN(parseInt(char2))) {
            
                //If char 1 is a letter, digit or underscore AND char 2 is a letter, digit or underscore
                if (isVariableNameChar(char1) && isVariableNameChar(char2)) {

                    //Append char 1 in variable name buffer 1               
                    //Append char 2 in variable name buffer 2
                    varNameBuffer1 += char1;
                    varNameBuffer2 += char2;
                    
                    //Execute 
                    do {
                        //If variable name buffer 1 is not empty
                        if (varNameBuffer1 != "") {
                            //Increment cursor position for code 1
                            cursor1++;                          
                            if (cursor1 < line1.length) {
                                //Read a character from code 1 and store in char 1
                                char1 = line1.charAt(cursor1);
                                //If char 1 is a letter, digit or underscore
                                if (isVariableNameChar(char1)) {
                                    //Append char 1 in variable name buffer 1
                                    varNameBuffer1 += char1;
                                //Else
                                } else {
                                    //Store variable name buffer 1 value
                                    tmpFrom = varNameBuffer1;
                                    //Empty variable name buffer 1
                                    varNameBuffer1 = "";
                                }                           
                            } else {
                                //Store variable name buffer 1 value
                                tmpFrom = varNameBuffer1;                               
                                //Empty variable name buffer 1
                                varNameBuffer1 = "";                            
                            }
                        }
                        //If variable name buffer 2 is not empty
                        if (varNameBuffer2 != "") {                 
                            //Increment cursor position for code 2
                            cursor2++;                          
                            if (cursor2 < line2.length) {
                                //Read a character from code 2 and store in char 2
                                char2 = line2.charAt(cursor2);  
                                //If char 2 is a letter, digit or underscore
                                if (isVariableNameChar(char2)) {
                                    //Append char 2 in variable name buffer 2
                                    varNameBuffer2 += char2;
                                //Else
                                } else {
                                    //Store variable name buffer 2 value
                                    tmpTo = varNameBuffer2;
                                    //Empty variable name buffer 2
                                    varNameBuffer2 = "";
                                }       
                            } else {
                                //Store variable name buffer 2 value
                                tmpTo = varNameBuffer2;
                                //Empty variable name buffer 2
                                varNameBuffer2 = "";                            
                            }
                        }
                    //Loop while variable name buffer 1 not empty OR variable name buffer 2 not empty
                    } while ((varNameBuffer1 != "") || (varNameBuffer2 != ""))                      
                    //New replacement occurence identified, does it match an existing replacement pattern ?
                    if (arrFrom.indexOf(tmpFrom) != -1) {                   
                        //If yes
                        if(tmpTo == arrTo[arrFrom.indexOf(tmpFrom)]) {
                            //Do nothing
                        //If no
                        } else {
                            //Replacement occurence does not match existing replacement pattern, return false
                            return false;
                        }
                    //New replacement pattern found
                    } else {        
                        //console.log("new pattern found : from = " + tmpFrom + " to = " + tmpTo);
                        //If either From or To are empty, some code has been added or removed, so the line is not a plagiarism, return false
                        if ((tmpFrom == "") || (tmpTo == "") || (typeof tmpFrom == "undefined") || (typeof tmpTo == "undefined")) {
                            return false;
                        //Else, store it in global arrays
                        } else {
                            arrFrom.push(tmpFrom);
                            arrTo.push(tmpTo);
                        }
                    }
                //Else
                } else {
                    //Difference is found outside of variable names, return false
                    return false
                }
            //Else
            } else {
                //Difference is found outside of variable names, return false
                return false;
            }       
        //Else
        } else {
            //Increment cursor position for code 1
            //Increment cursor position for code 2
            cursor1++;
            cursor2++;
        }
    //Loop
    } while (true)
}