function taskMaker(source, challengeId) {

    var counter;
    var result = [];
    var arr_tmp;
    var id_tmp;

    //For each source array element
    for (counter = 0; counter < source.length; counter++) {
        //If current element qualifies as special comment
        arr_tmp = source[counter].split("//");
        if(typeof arr_tmp[1] =="string") {
            if (arr_tmp[1].substr(0, 3) == "DB ") { 
                //If current element "special comment Id" == challengeId
                id_tmp = arr_tmp[1].split(" ");
                if (parseInt(id_tmp[1]) == challengeId) {
                    //Replace last result array element with trimmed version of current element
                    result[result.length - 1] = arr_tmp[0] + arr_tmp[2];
                //Else
                } else {
                    //Do nothing
                }
            //Else
            } else {
                //Add current element to result array
                result.push(source[counter]);
            }
        //Else
        } else {
            //Add current element to result array
            result.push(source[counter]);
        }

    }
    
    //Return result array
    return result;
    
}





















