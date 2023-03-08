const mocha = require('mocha')

const testRunner = new mocha({})
// const path = process.argv.slice(2)
const path = "test_one.js"
testRunner.addFile(path)
testRunner.run(function (err) {
    err && console.error(err.stack || err);
    exit(err ? 1 : 0);
});
