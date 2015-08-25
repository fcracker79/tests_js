var logger = require('debug')('org.moonlight.animals')

function Animal(name) {
    this.name = name
}

Animal.prototype.constructor = Animal
Animal.prototype.getName = function() {
    return this.name
}

Animal.prototype.doFunnyThings = function() {
    throw Error('Implement me!');
}

function Lion(name) {
    Animal.call(this, name);
}
Lion.prototype = Animal.prototype
Lion.prototype.constructor = Lion
Lion.prototype.doFunnyThings = function() {
    logger('The lion %s roars', this.getName());
}

function Dog(name) {
    Animal.call(this, name)
}

Dog.prototype = Animal.prototype
Dog.prototype.constructor = Dog
Dog.prototype.doFunnyThings = function() {
    logger('The dog %s barks', this.getName());
}

function Monkey(name) {
    Animal.call(this, name)
}

Monkey.prototype = Animal.prototype
Monkey.prototype.constructor = Monkey
Monkey.prototype.doFunnyThings = function() {
    logger('The monkey %s jumps', this.getName());
}

module.exports = {
    Dog: Dog,
    Lion: Lion,
    Monkey: Monkey
};

