const fs = require("fs");
const loader = require("@assemblyscript/loader");
loader.instantiate(fs.readFileSync(__dirname + "/build/optimized.wasm"), { /* imports */ })
.then( ({exports}) => {
    for (key in exports){
        console.log(key, exports[key]) 
    }

    const { add, concat } = exports
    // Counting references
    // One can think of __retain as incrementing the reference count by 1 so the object does not become collected while we are working with it, and of __release as decrementing the reference count by 1 again
    const { __allocString, __getString, __retain, __release } = exports

    function doConcat(aStr, bStr) {
        let aPtr = __retain(__allocString(aStr))
        let bPtr = __retain(__allocString(bStr))
        let cPtr = concat(aPtr, bPtr)
        let cStr = __getString(cPtr)
        __release(aPtr)
        __release(bPtr)
        __release(cPtr)
        return cStr
    }
    console.log(doConcat('Hello', "world"))
    return exports
})

module.exports = loader.instantiateSync(fs.readFileSync(__dirname + "/build/optimized.wasm")).exports

