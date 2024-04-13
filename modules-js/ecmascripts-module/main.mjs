import { Sum as Suma, Mul as Multiplication } from "./local_x.mjs";
import defaultLocalY, * as modLocalY from "./local_y.mjs"
const number = Suma(2,3)
const numberTwo =  Multiplication(2, 44)
console.log(number, numberTwo);
console.log(modLocalY.sayHello());
console.log(defaultLocalY);
// import * as mod from "./local_x.mjs"
// console.log(typeof mod, mod);