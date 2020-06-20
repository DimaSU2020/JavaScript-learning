const coffeeMachine = {
    mfr: `Bosch`,
    model: `VeroCup100`,
    water: 0,
    waterMax: 1400,
    coffee: 0,
    coffeeMax: 250,
    started: false,
    drink: ``,
    americano: [200, 11],
    espresso: [30, 7],
    test: function() {
        if  (this.water >= 200 && this.coffee >= 11) {
            console.log(this.mfr + ` ` + this.model + ` ` + `is ready to use: choose a drink, please:\nAmericano or Espresso`);
            return this.started = true;
        }   if (this.water < 200) {
                console.log(`Water's tank is empty. Add water, please!`);
                return this.started = false;
                }   if (this.coffee < 11) {
                        console.log(`Coffee's box is empty. Add coffee, please!`);
                        return this.started = false;
                    }   else {
                            console.log(`Error or clean a container`);
                            return this.started = false;
                        }        
    },
    addWater: function(amount) {
        this.water = this.water + amount;
        const difference = this.water - this.waterMax;
        if (this.water <= this.waterMax) {
            this.started = true;
            return console.log(`Added` + ` ` + amount + 'l of water');
        }   else {
                this.water = this.waterMax;
                this.started = true;
                return console.log(`Too much water! Return you ` + difference + 'l of water');
            }  
    },
    addCoffee: function(amount) {
        this.coffee = this.coffee + amount;
        const difference = this.coffee - this.coffeeMax;
        if (this.coffee <= this.coffeeMax) {
            return console.log(`Added` + ` ` + amount + 'gr of coffee');
        }   else {
                this.coffee = this.coffeeMax;
                this.started = true;
                return console.log(`Too much coffee! Return you ` + difference + 'gr of coffee');
            }
    },
    make: function(drinkType) {
        this.water = this.water - drinkType[0];
        this.coffee = this.coffee - drinkType[1];
    },
    prepare: function(drink) {
        if (this.test() === true) {
            switch (drink) {
                case `Americano`:
                    this.make(this.americano);
                    console.log(`Your Americano is ready ☕`);
                break;
                case `Espresso`:
                    this.make(this.espresso);
                    console.log(`Your Espresso is ready ☕`);
                break;
                default :
                    console.log(`Please repeat your choice. We make Americano or Espresso only`);
                break;
            }
        }
    },   
};

coffeeMachine.prepare(`Americano`);
console.log(coffeeMachine.water);
console.log(coffeeMachine.coffee);
coffeeMachine.prepare(`Espresso`);
console.log(coffeeMachine.water);
console.log(coffeeMachine.coffee);
coffeeMachine.addWater(500);
coffeeMachine.addCoffee(30);
coffeeMachine.prepare(`Americano`);
console.log(coffeeMachine.water);
console.log(coffeeMachine.coffee);
coffeeMachine.prepare(`Espresso`);
console.log(coffeeMachine.water);
console.log(coffeeMachine.coffee);
coffeeMachine.prepare(`Espresso`);
console.log(coffeeMachine.water);
console.log(coffeeMachine.coffee);
coffeeMachine.prepare(`Espresso`);
console.log(coffeeMachine.water);
console.log(coffeeMachine.coffee);