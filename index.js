const fs = require('fs')
const math = require('./math.js')
fs.writeFile('./test.txt', 'Yash Parmar', () => {});

// console.log({
//     "exports": exports,
//     "require":require,
//     "module":module,
//     __filename,
//     __dirname
// });

function _require () {
    // ... agar id . se shuru hua toh user ki dir me code dhundo
    // ... aniytha khud ke internal module me dhundo 
    // ... agar mil gaya to well and good
    // .... aniytha node-module me dhundo
    // ... throw error
}

// console.log("MATH : " , math);
// console.log(exports);
// console.log(math.add(3,5));

