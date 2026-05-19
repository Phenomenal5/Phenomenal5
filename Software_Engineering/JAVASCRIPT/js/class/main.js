/*import {add} from "./app.js";

function splitStr(str, maxLen) {
    let arr = [];
    let currentCha = '';
    for(let i = 0; i < str.length; i++){
        if(currentCha.length < maxLen){
            currentCha += str[i];
        }else{
            arr.push(currentCha);
            currentCha = str[i];
        }
    }
    return arr;
}

console.log(splitStr('helloijisfonfjsvns', 4));


const person = {
    name: "Ken",
    age: 70,
    gender: "male"
};

let {name, age} = person;

console.log(`The ${name} is a ${age}`);

const array1 = ['ken', 'abdullahi', 'david', 'norman'];
const array2 = ['Nurudeen', 'Chigozie', 'Emmmanuel', 'GMC'];

const result = array1.conca

const {add} = require('./app');

console.log(add(3,5));

function splitArr(arr, maxLen) {
    let arrs = [];
    let currentVal = [];
    for(let i = 0; i < arr.length; i++){
        if(currentVal.length < maxLen){
            currentVal.push(arr[i]);
        } else {
            arrs.push(currentVal);
            currentVal = [arr[i]];
        }
    }
    if(currentVal.length > 0){
        arrs.push(currentVal);
    }
    return arrs;
}

const nums = [21, 32, 71, 34, 5, 6, 80, 30, 29, 60];
console.log(splitArr(nums, 3));

// function logic(numbers, target) {
//     let indexNums = [];
//     let num = [];
//     for()
// }

function solution(number) {
    let sum = 0;
    let x;
    if(number > 0) {
        for (let i = 1; i < number; i++) {
            if(i % 3 === 0 || i % 5 === 0) {
                sum += i;
            }
        }
        x = sum;
    } else {
        x = 0;
    }
    return x;
}


console.log(solution(15));




function sumNestedArray(arr) {
    let flattenedArray = arr.flat(Infinity);
   return flattenedArray.reduce((a, b) => a + b);
}

const num = [2,[5,[6,7],[8,9]],[6,9]];
const val = [1, [2, [3, 4], 5]];

console.log(sumNestedArray(num));
console.log(sumNestedArray(val));


function task(arrayOfNum) {
    let result =0;
    for(let i = 0; i < arrayOfNum.length; i++){
        if(Array.isArray(arrayOfNum[i])){
            result += task(arrayOfNum[i]);
        }else{
            sum +=
        }
    }
}
    

class Animal{
    constructor(name, color, isWild, sound){
        this.name = name;
        this.color = color;
        this.isWild = isWild;
        this.sound = sound;
    }

    makeSound() {
        console.log(`${this.name} ${this.sound}`);
        return this;
    }

    aboutAnimal() {
        console.log(`the ${this.color} colored ${this.name} ${this.sound}`);
        return this;
    }

    isDomestic() {
        if (this.isWild === "false") {
          console.log(`${this.name} is a domestic animal that ${this.sound}`);
          return this;
        } else {
          console.log(`${this.name} is a wild animal that ${this.sound}`);
          return this;
        }
    }

    animalName(){
        console.log(`This is a/an ${this.name}`);
    }

}

// const dog = new Animal("dog", "black", "false", "barks");
// const lion = new Animal("lion", "gold", "true", "roars");
// const goat = new Animal("goat", "black", "false", "bleets");
// const mosquito = new Animal("mosquito", "black", "false", "buzz");

// const animals = [dog, lion, goat, mosquito];

// class ListAllANimals extends Animal{
//     listAllAnimalsNamesAndColors() {
//         animals.map(animal => {
//             console.log(animal.name, animal.color);  
//         });
//     };
// }

// const listAllAnimals = new ListAllANimals();
// listAllAnimals.listAllAnimalsNamesAndColors();



class AnimalClassification extends Animal{
    // constructor method to initialize object properties
    constructor(name, order) {
      super(name)
      this.order = order;
    }
   
   classifyByOrder(animalName) {
    const animalClass = animals.find((animal) => animal.name === animalName)
  
  
    if(animalClass){
      console.log(`${animalClass.name} is a ${animalClass.order}`);
    } else{
      console.log(`${animalName} class not found`);
    }
    return this;
    }

    animalIdentity() {
        super.animalName();
    }
}

// const goat = new AnimalClassification("goat", "herbivore")
// const dog = new AnimalClassification("dog", "herbivore")
// const lion = new AnimalClassification("lion", "herbivore")
// const mosquito = new AnimalClassification("mosquito", "herbivore")
  
  // array of AnimalClassification objects
// const animals = [dog, lion, goat, mosquito];
  
  // create a classifier object from the AnimalClassification class
const classifier = new AnimalClassification()
const dog = new AnimalClassification("dog", "carnivore", "barks");
  
  // use the classifier object to get the order of the animal
// classifier.classifyByOrder("mosquito")
// classifier.classifyByOrder("dog").
dog.animalIdentity();


function Animal(name, color, isWild, sound) {
    this.name = name;
    this.color = color;
    this.isWild = isWild;
    this.sound = sound;
}
  // adding a METHOD using the prototype object method
  Animal.prototype.aboutAnimal = function () {
    return `the ${this.color} colored ${this.name} ${this.sound}`;
};
  
  
  // adding a PROPERTY using the prototype object method
  Animal.prototype.order = "carnivore";
  
  
  const dog = new Animal("dog", "black", false, "barks");
  
  
  console.log(dog);
  
  
  // accessing the property
  console.log(dog.order);

*/

function Animal(name, color, isWild, sound) {
    this.name = name;
    this.color = color;
    this.isWild = isWild;
    this.sound = sound;
}
// adding a PROPERTY using the prototype object method
Animal.prototype.order = "carnivore";
  
  
// an instance of the class
const dog = new Animal("dog", "black", false, "bark");
  
  
function DogLocation(...props) {
    Animal.apply(this, props);
    // adding a new property
    this.location = "city";
}

// function Dogowner(...prop){
//     DogLocation.apply(this, prop);
//     // adding a new property
//     this.ownerName = "Jimba";
// }

// inheriting the Animal prototype
DogLocation.prototype = Object.create(Animal.prototype);

DogLocation.prototype.dogOwner = function() {
    console.log("Steve");
}
const dogHabitat = new DogLocation("dog", "brown");
// const dogOwners = new Dogowner("dog", "gold", false, "bark");


console.log(dog);
// console.log(dogOwners);