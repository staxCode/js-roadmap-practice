// console.log(typeof null);
// console.log(typeof undefined);
console.log(typeof 0);
console.log(typeof "0");
// console.log(typeof false);


// igualdad estricta ===
console.log("2" === 2);
console.log(NaN === NaN);
console.log(undefined === NaN);
console.log(new String("0") === "0");


// igualdad debil ==
var obj = new String("0");
console.log("2" == 2);
console.log("1" == true);
console.log(false == 0);
console.log(true == "1");
console.log(new String("0") == "0");

// both false, except in rare cases
console.log(obj == null);
console.log(obj == undefined);

// Object.is