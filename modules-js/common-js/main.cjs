// function sayHi(){ console.log("hello world!")}
// module.exports = sayHi

// module.exports = function (){ console.log("hello world!")}

function sayHi() { console.log("hello world!") }
function sayBye() { console.log("bye world.") }
const profile = {
    name: "John",
    age: 12
}

const user = "Pepe"

module.exports = {
    sayBye,
    sayHi,
    profile,
    user
}
