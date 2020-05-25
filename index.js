const fs = require("fs");
const loader = require("@assemblyscript/loader");
console.log(loader.instantiateSync(fs.readFileSync(__dirname + "/build/untouched.wasm"), { /* imports */ }))
module.exports = loader.instantiateSync(fs.readFileSync(__dirname + "/build/untouched.wasm"), { /* imports */ }).exports
