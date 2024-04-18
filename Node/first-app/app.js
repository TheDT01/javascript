const os = require('os');

let totalMemory = os.totalmem();
let freeMemory = os.freemem();


function sec(lol) {
    return lol / 3600000;
}


let finalTotalMemory = sec(totalMemory);
let finalFreeMemory = sec(freeMemory);

console.log( `Total memory: ${finalTotalMemory}`);
console.log(`free memory: ${finalFreeMemory}`);
