/*

A sequence of integers is called a zigzag sequence if each of its elements is either strictly less than all its neighbors or strictly greater than all its neighbors. For example, the sequence 4 2 3 1 5 3 is a zigzag, but 7 3 5 5 2 and 3 8 6 4 5 aren't. Sequence of length 1 is also a zigzag.

For a given array of integers return the length of its longest contiguous sub-array that is a zigzag sequence.

Example

    For a = [9, 8, 8, 5, 3, 5, 3, 2, 8, 6], the output should be
    zigzag(a) = 4.

    The longest zigzag sub-arrays are [5, 3, 5, 3] and [3, 2, 8, 6] and they both have length 4.

    For a = [4, 4], the output should be
    zigzag(a) = 1.

    The longest zigzag sub-array is [4] - it has only one element, which is strictly greater than all its neighbors (there are none of them).

Input/Output

*/

function checkSequence(arr, start, end) {
    var test = function(a, b, c){
        condition1 = ((b - a) > 0 && (b - c) > 0);
        condition2 = ((b - a) < 0 && (b - c) < 0);
        return (condition1 || condition2) ? true : false ;
    }
    var result = true;
    while (start < end - 1) {
        result = result && test(arr[start], arr[start + 1], arr[start + 2]);
        start++;
    }
    return result;
}

function zigzag(array) {
    if (array.length == 1) {return 1};
    if (array.length == 2 && array[0] != array[1]) {return 2};
    if (array.length == 2 && array[0] == array[1]) {return 1};
    var start = 0;
    var end = 0;
    var length = 1;
    while (start < array.length) {      
        if (checkSequence(array, start, end)) {
            end++;
        } else {
            if (end - start > length) {length = end - start}
            end--;
            start = end;
        }
    }
    return length;
}