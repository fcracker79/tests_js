//mocha = require('mocha')
assert = require('assert')
animals = require('../lib/Animals')
describe(
    'Check animals names', 
    function() {
        it('checks if the lion\'s name is correct', function() {
            lion = new animals.Lion('King')
            assert.equal('King', lion.getName())
        })
    }
)
