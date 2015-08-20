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
    console.log('The lion ' + this.getName() + ' roars');
}

function Dog(name) {
    Animal.call(this, name)
}

Dog.prototype = Animal.prototype
Dog.prototype.constructor = Dog
Dog.prototype.doFunnyThings = function() {
    console.log('The dog ' + this.getName() + ' barks');
}

function Monkey(name) {
    Animal.call(this, name)
}

Monkey.prototype = Animal.prototype
Monkey.prototype.constructor = Monkey
Monkey.prototype.doFunnyThings = function() {
    console.log('The monkey ' + this.getName() + ' jumps');
}

module.exports = {
    Dog: Dog,
    Lion: Lion,
    Monkey: Monkey
};

