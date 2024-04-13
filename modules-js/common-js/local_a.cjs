require("./main.cjs").sayHi()

const { profile : pf1, user } = require("./main.cjs")
console.log(pf1, user);
const { profile : pf2, user: user2} = require("./local_b.cjs")
console.log(pf1, user, user2);
console.log(pf1, pf2);