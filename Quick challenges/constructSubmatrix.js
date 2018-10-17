/*

Given a matrix (i.e. an array of arrays), find its submatrix obtained by deleting the specified rows and columns.

Example

For

matrix = [[1, 0, 0, 2], 
          [0, 5, 0, 1], 
          [0, 0, 3, 5]]

rowsToDelete = [1] and columnsToDelete = [0, 2], the output should be

constructSubmatrix(matrix, rowsToDelete, columnsToDelete) = [[0, 2],
                                                             [0, 5]]
*/
function constructSubmatrix(matrix, rowsToDelete, columnsToDelete) {
    var submatrix = [];
    return matrix.reduce(function(result, val, index, arr){
        if (rowsToDelete.indexOf(index) == -1) {
            var i;
            var j = [];
            for (i = 0; i < val.length; i++) {                
                if (columnsToDelete.indexOf(i) == -1) {
                    j.push(val[i]);
                }
            }               
            result.push(j);
            return result;
        } else {        
            return result;
        }   
    }, submatrix);
}
