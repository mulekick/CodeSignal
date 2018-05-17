'use strict'
characterParity = s => isNaN(1 * s) ? "not a digit" : 1 * s % 2 === 0 ? "even" : "odd";