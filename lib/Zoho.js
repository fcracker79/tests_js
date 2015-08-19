var EventEmitter = require('events').EventEmitter;

function Zoho() {
    this.zoho_animals = []
}

Zoho.prototype = new EventEmitter();
Zoho.prototype.constructor = Zoho;

Zoho.prototype.addAnimal = function(animal) {
    this.zoho_animals.push(animal);
    this.emit('animalAdded', animal);
}

Zoho.prototype.show = function() {
    that = this
    this.emit('zooOpened', this)
    this.zoho_animals.map(function(animal) {
        that.emit('animalBeforeDoingFunnyThings', animal);
        animal.doFunnyThings();
        that.emit('animalAfterDoingFunnyThings', animal);
    });
    
    this.emit('zooClosed', this);
}

Zoho.prototype.addOnZooOpened = function(f) {
    this.on('zooOpened', f);
}

Zoho.prototype.addOnZooClosed = function(f) {
    this.on('zooClosed', f);
}

Zoho.prototype.addOnAddAnimalListener = function(f) {
    this.on('animalAdded', f);
}

Zoho.prototype.addOnAnimalBeforeDoingFunnyThings = function(f) {
    this.on('animalBeforeDoingFunnyThings', f);
}

Zoho.prototype.addOnAnimalAfterDoingFunnyThings = function(f) {
    this.on('animalAfterDoingFunnyThings', f);
}

module.exports = Zoho
