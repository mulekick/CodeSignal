'use strict'
alphabetSubsequence = (s) => [...s].every((x, i, a) => i === 0 || x.charCodeAt() > a[--i].charCodeAt());