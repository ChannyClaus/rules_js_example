const mocha = require('mocha')

const testRunner = new mocha({})
const path = process.argv.slice(2)
console.log("path: ", path)
testRunner.addFile(process.argv.slice(2))
testRunner.run(function (err) {
    err && console.error(err.stack || err);
    exit(err ? 1 : 0);
});
