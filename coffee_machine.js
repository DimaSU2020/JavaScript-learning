const coffeeMachine = {
    mfr: `Bosch`,
    model: `VeroCup100`,
    water: 0,
    waterMax: 1400,
    coffee: 0,
    coffeeMax: 250,
    drink: ``,
    americano: {
        water: 200,
        coffee: 11,
    },
    espresso: {
        water: 30,
        coffee: 7,
    },
    test: function() {
        if (this.water < 200) {
            console.log(`Water's tank is empty. Add water, please!`);
            return false;
        }   
        if (this.coffee < 11) {
            console.log(`Coffee's box is empty. Add coffee, please!`);
            return false;
        }   
        else {
            console.log(`${this.mfr} ${this.model} is ready to use: choose a drink, please:\nAmericano or Espresso`);
            return true;
        }        
    },
    addWater: function(amount) {
        if (this.water + amount > this.waterMax) {
            this.water = this.waterMax;
        } else {
            this.water = this.water + amount;
        }
            console.log('Water added');
    },
    addCoffee: function(amount) {
        if (this.coffee + amount > this.coffeeMax) {
            this.coffee = this.coffeeMax;
        } else {
            this.coffee = this.coffee + amount;
        }
            console.log('Coffee added');
    },
    makeDrink: function(drink) {
        this.water = this.water - drink.water;
        this.coffee = this.coffee - drink.coffee;
    },
    prepare: function(drink) {
        if (this.test() !== true) {
            return;
        }
        switch (drink) {
            case 'Americano':
                this.makeDrink(this.americano);
                console.log('Your Americano is ready ☕');
            break;
            case 'Espresso':
                this.makeDrink(this.espresso);
                console.log('Your Espresso is ready ☕');
            break;
            default :
            console.log('Error! Repeat your choice, please. \nWe make Americano or Espresso only');
        }
    },   
};

coffeeMachine.prepare('Americano');
console.log(coffeeMachine.water);
console.log(coffeeMachine.coffee);
coffeeMachine.addWater(2000);
coffeeMachine.prepare('Americano');
coffeeMachine.addCoffee(30);
coffeeMachine.prepare('Americano');
console.log(coffeeMachine.water);
console.log(coffeeMachine.coffee);
coffeeMachine.prepare('Capucino');

