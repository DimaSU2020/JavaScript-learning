const coffeeMachine = {
    mfr: `Bosch`,
    model: `VeroCup100`,
    waterTank: 0,
    waterTankMax: 1400,
    coffeeBox: 0,
    coffeeBoxMax: 250,
    started: false,
    drink: ``,
    americano: [200, 11],
    espresso: [30, 7],
    test: function() {
        if  (this.waterTank > 200 && this.coffeeBox > 11) {
            this.started = true;
            return console.log(this.mfr + ` ` + this.model + ` ` + `is ready to use: choose a drink, please:\nAmericano or Espresso`);
        }   if (this.waterTank < 200 && this.waterTank >= 30 
                && this.coffeeBox < 11 && this.coffeeBox >= 7) {
                this.started = true;
                this.drink = `Espresso`;
                return console.log(this.mfr + ` ` + this.model + ` ` + `is ready to use: you can choose Espresso only`);
            }   if (this.waterTank < 30) {
                    this.started = false;
                    return console.log(`Water's tank is empty. Add water, please!`);
                }   if (this.coffeeBox < 7) {
                        this.started = false;
                        return console.log(`Coffee's box is empty. Add coffee, please!`);
                    }   else {
                            this.started = false;
                            return console.log(`Error or clean a container`);
                        }        
    },
    addWater: function(amount) {
        this.waterTank = this.waterTank + amount;
        if (this.waterTank <= this.waterTankMax) {
            this.started = true;
            return console.log(`Added` + ` ` + amount + 'l of water');
        }   else {
                this.waterTank = 0;
                this.started = false;
                return console.log(`Error! Too much water. Try it again, please`);
            }  
    },
    addCoffee: function(amount) {
        this.coffeeBox = this.coffeeBox + amount;
        if (this.coffeeBox <= this.coffeeBoxMax) {
            return console.log(`Added` + ` ` + amount + 'gr of coffee');
        }   else {
                this.coffeeBox = 0;
                this.started = false;
                return console.log(`Error! Too much coffee. Try it again, please`);
            }
    },
    make: function(drinkType) {
        this.waterTank = this.waterTank - drinkType[0];
        this.coffeeBox = this.coffeeBox - drinkType[1];
    },
    prepare: function(drink) {
        if (this.started == true) {
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


coffeeMachine.test();
coffeeMachine.addWater(1000);
coffeeMachine.test();
coffeeMachine.addCoffee(200);
coffeeMachine.test();
coffeeMachine.prepare(`Americano`);
console.log(coffeeMachine.waterTank);
console.log(coffeeMachine.coffeeBox);
coffeeMachine.test();
coffeeMachine.prepare(`Espresso`);
console.log(coffeeMachine.waterTank);
console.log(coffeeMachine.coffeeBox);
