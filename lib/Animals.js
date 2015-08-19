function Animal(name) {
    this.name = name
}

Animal.prototype.constructor = Animal
Animal.prototype.doFunnyThings = function() {
    throw Error('Implement me!');
}

function Lion(name) {
    Animal.call(this, name);
}
Lion.prototype.constructor = Lion
Lion.prototype.doFunnyThings = function() {
    console.log('The lion ' + this.name + ' roars');
}

function Dog(name) {
    Animal.call(this, name)
}

Dog.prototype.constructor = Dog
Dog.prototype.doFunnyThings = function() {
    console.log('The dog ' + this.name + ' barks');
}

function Monkey(name) {
    Animal.call(this, name)
}

Monkey.prototype.constructor = Monkey
Monkey.prototype.doFunnyThings = function() {
    console.log('The monkey ' + this.name + ' jumps');
}

module.exports = {
    Dog: Dog,
    Lion: Lion,
    Monkey: Monkey
};

