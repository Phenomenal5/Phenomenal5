// includes ()
// some()



//  includes
// includes(value, start index)

const names = ["ken", "Abdullahi", "David", "bayo"];
const num = [20, 10, 3, 8, 90];
const str = "hello, world";


let res = num.includes();



function checkName(name) {
    return names.includes(name);
}

// console.log(checkName("David"));
// console.log(res);
// console.log(str.includes("world"));


// some()

const numbers = [1, 2, 3, 4, 5];

const result1 = numbers.some(greaterThanFour);

function greaterThanFour(x) {
    return x > 4;
}

const person = [
    {
        name: "Abdullai",
        age: 24
    },
    {
        name: "David",
        age: 19
    },
    {
        name: "ken",
        age: 60
    },
]

let ageCheck = person.some(value => value.age < 18);
console.log(ageCheck);

// console.log(result1);