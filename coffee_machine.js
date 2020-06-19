const coffeeMachine = {
    mfr: `Bosch`,
    model: `VeroCup100`,
    waterTank: 0,
    waterTankCupacity: 1400,
    coffeeBox: 0,
    coffeeBoxMax: 250,
    started: false,
    kindDrink: ``,
    americano: [200, 11],
    espresso: [30, 7],
    test: function() {
        if  (this.waterTank > 200 && this.coffeeBox > 11) {
            this.started = true;
            return console.log(this.mfr + ` ` + this.model + ` ` + `is ready to use: choose a drink, please:\nAmericano or Espresso`);
        }   if (this.waterTank < 200 && this.waterTank >= 30 
                && this.coffeeBox < 11 && this.coffeeBox >= 7) {
                this.started = true;
                this.kindDrink = `Espresso`;
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
    prepare: function(drink) {
        if (this.started == true) {
            if (drink == `Americano` && this.kindDrink !== `Espresso`) {
                this.waterTank = this.waterTank - this.americano[0];
                this.coffeeBox = this.coffeeBox - this.americano[1];
                this.started = false;
                return console.log(`Your Americano is ready ☕`);
            }
            if (kindDrink == `Espresso` || this.kindDrink == `Espresso`) {
                this.waterTank = this.waterTank - this.espresso[0];
                this.coffeeBox = this.coffeeBox - this.espresso[1];
                this.started = false;
                return console.log(`Your Espresso is ready ☕`);
            } else {
                this.started = false;
                return console.log(`Please repeat your choice. We make Americano or Espresso only`);
            }   
        }
            else {
                this.started = false;
                return console.log(`Error! Try to turn on machine again, please`);
            }
    },
};
coffee_machine.test();
coffee_machine.addWater(5000);
coffee_machine.test();
coffee_machine.addWater(1400);
coffee_machine.test();
coffee_machine.addCoffee(500);
coffee_machine.test();
coffee_machine.addCoffee(250);
coffee_machine.test();
coffee_machine.prepare(`Americano`);
coffee_machine.prepare(`Espresso`);
console.log(coffee_machine.waterTank);
console.log(coffee_machine.coffeeBox);