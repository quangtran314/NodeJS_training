/// Test String type declare
const testString1: string = "QuangTran";
const testString2 = "QuangTran";


/// Test number type declare
/// Have only "number" type, there are no integer or floating type
let a: number = 22;
a = 22.5;

const a1: number = 0xf00d;  // Typescript allows for hexadecimal literal
const b1: number = 0o744;   // Typescript allows for octal literal


/// Test boolean type declare
const isTest: boolean = true;

const isTest1: boolean = 1; // Error because TS doesn't allow 0 and 1 interchangeable boolean value


/* Test any type declare
Is the type that a variable, argument, or function return will have if don’t specify a type explicitly */
let a2
a2 = "hello world";
a2 = 10;

let a3: any = "Hello World";
a3 = 20;


/// Test arrays type declare
const animal: String[] = ["dog", "cat"];
const furniture: any[] = ["chair", 10];
const test1: (string | number)[] = [12, "QuangTran", 20]; // array of string or number or both types


let pets = ["vet", "bubbles"]; // there's string[] type inferred
pets = [1]; // Error since pets is string[] type


/// Test tuples declare
/// TS enforced number of elements and type of elements
const authors: [string, number] = ["QuangTran", 22];
const authors1: [string | number] = [22];


/// Test Enum declare
enum Food { Pizza, FriedChicken, IceCream = 500, Noodle };
let myFavoriteFood = Food.FriedChicken;
console.log(myFavoriteFood);    // This statement will print element index (1)
console.log(Food.Noodle);   // This statement will print previous element's value plus 1 (if previous has value)


/// Test function declare
let myMathFunction: (num1: number, num2: number) => string;
function add(n1: number, n2: number): string {
    return '' + (n1 + n2);
}
myMathFunction = add;


/// Test object declare
let person: {
    firstName: string,
    lastName: string,
    age: number
} = {
    firstName: "Quang",
    lastName: "Tran",
    age: 22
};


/// Test null, void, undefined types
let favoriteCar = "Camaro";
favoriteCar = null; // null is subtype of all other types
let myFavoriteNumber: number = null;

let favoriteCar = undefined;    // undefined is subtype of all other types too

// The void type is typically only seen as the return type of a function


/// Custom type aliases
type PersonType = {
    firstName: String,
    lastName: String,
    age: number
};

let person1: PersonType = {
    firstName : "Quang", lastName : "Tran", age : 52
}


/// Union Type
let myAge: number | string
myAge = 46;
myAge = "46";
myAge = true; // error because myAge is only can be number or string type


/// Operator
// Arithmetic Operators
let a4 = 10 + 20;
a4 = 20 - 10;
a4 = 20 * 10;
a4 = 20 / 10;
a4 = 20 % 10;
a4++;
a4--;

// Comparison Operators
let num1 = 10;
let num2 = 20;
console.log(num1 == num2); // false
console.log(num1 != num2); // true
console.log(num1 > num2); // false
console.log(num1 < num2); // true
console.log(num1 >= num2); //false
console.log(num1 <= num2);

// Logical Operators
console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); //false
console.log(true || false); // true
console.log(!true); //false

// Assign Operator
let num3 = 10;
num3 += 1;
num3 -= 1;
num3 *= 1;
num3 /= 1;
num3 %= 1;

// Conditional operator
let num4 = (1 > 3) ? "true" : "false"

// Concatenation operator
let world = "world";
console.log("hello" + world);

// Type operator
let Bike = {make: 'Honda', model: 'CLIQ', year: 2018};
console.log('make' in Bike); // output: true

let Bike1 = { Company1: 'Honda',
             Company2: 'Hero',
             Company3: 'Royal Enfield'
           };
delete Bike1.Company1;
console.log(Bike); // output: { Company2: 'Hero', Company3: 'Royal Enfield' }

let message = "Welcome to " + "JavaTpoint";
console.log(typeof message); // output: String

let arr = [1, 2, 3];
console.log( arr instanceof Array ); // true
console.log( arr instanceof String ); // false