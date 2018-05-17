'use strict'
reflectString = s => String.fromCharCode(...[...s].map(x => 0x7A - x.charCodeAt() % 0x61));