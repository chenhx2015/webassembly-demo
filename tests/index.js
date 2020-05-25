const assert = require("assert");
const myModule = require("../index.js");
console.log(myModule.add(1, 2))
assert.equal(myModule.add(1, 2), 3);
console.log("ok");
