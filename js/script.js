'use strict';

let calculator = {

    read: function() {
        this.num1 = +prompt("Input the first number");
        this.num2 = +prompt("Input the second number");

        if (this.num1 === undefined || this.num2 === undefined) throw new Error("The number is undefined");
        if (typeof this.num1 !== "number" || typeof this.num2 !== "number") throw new Error("The number is not in type Number");
        if (isNaN(this.num1) || isNaN(this.num2)) throw new Error("The number is not a valid number");
    },

    sum: function() {
        return this.num1 + this.num2;
    },

    mul: function() {
        return this.num1 * this.num2;
    },
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );