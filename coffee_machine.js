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
        this.water = this.water + amount;
        const difference = this.water - this.waterMax;
        if (this.water <= this.waterMax) {
            console.log(`Added ${amount}l of water`);
            return true;
        }   else {
            console.log(`Too much water! Return you ${difference}l of water`);
            this.water = this.waterMax;
            return true;
            }  
    },
    addCoffee: function(amount) {
        this.coffee = this.coffee + amount;
        const difference = this.coffee - this.coffeeMax;
        if (this.coffee <= this.coffeeMax) {
            console.log(`Added ${amount}gr of coffee`);
            return true;
        }   else {
            console.log(`Too much coffee! Return you ${difference}gr of coffee`);
            this.coffee = this.coffeeMax;
            return true;
            }
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
coffeeMachine.addCoffee(30);
coffeeMachine.prepare('Americano');
console.log(coffeeMachine.water);
console.log(coffeeMachine.coffee);
coffeeMachine.prepare('Capucino');
console.log(coffeeMachine.water);
console.log(coffeeMachine.coffee);
