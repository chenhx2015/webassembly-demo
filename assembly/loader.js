const loader = require("@assemblyscript/loader")
loader.instantiate(
    fetch('optimized.wasm'), 
    // or fs.readFileSync
    // or fs.promises.readFile
    // or just a buffer
    {  }
).then(({exports}) => {
    console.log(exports)

})