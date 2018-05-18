/*
Given an integer size, return an array containing each integer from 1 to size in the following order:

1, size, 2, size - 1, 3, size - 2, 4, ...

Example

For size = 7, the output should be
constructArray(size) = [1, 7, 2, 6, 3, 5, 4].

Input/Output

[execution time limit] 4 seconds (js)

[input] integer size

A positive integer.

Guaranteed constraints:
1 ≤ size ≤ 15.

[output] array.integer
*/
constructArray = s => {
    var u = 1, d = s, r = [];
    while (u < d) r.push(u++, d--);
    if (s % 2 === 1) r.push(u);
    return r;
}
