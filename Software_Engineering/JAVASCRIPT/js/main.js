/*
let name = prompt("What is your name")

if(confirm("we want to greet you.") === true){
    alert(`welcome ${name}`)
}


let i = 0;

while (i < 10) {
    console.log(i);
}

function answer(num) {
    let i = 1;
    let total = 2;
    while (i <= num) {
        total = total * i ;
        i++;
    }
    return total;
}

console.log(answer(5))



let i = 0;
let num = 5;
let answer = 1;

while (i <= num) {
    answer = (num ** 2) + answer;
    i++;
}
console.log(answer)


let input = 5;
 
if (input === 1) {
    console.log("Check the fan: e1")
} else if(input === 2) {
    console.log("Emergrncy stop: e2")
}else if(input === 3) {
    console.log("Pump Error: e3")
}else if(input === 4) {
    console.log("c: e5")
}else if(input === 5) {
    console.log("Temperature Error: e5")
}else{
    console.log("101")
}

 
// With switch
const x = 3; 

switch (x) {
    case 1:
        console.log("Check the fan: e1");
        break;
    case 2:
        console.log("Emergency stop: e2");
        break;
    case 3:
        console.log("Pump error: e3");
        break;
    case 4:
        console.log("c: e4");
        break;
    case 5:
        console.log("Temperature Sensor Error: e5");
        break;
    default:
        console.log("101");
    break;

}



function reverseString(str) {
    result = str.split('').reverse('').join('');
    return result;
}

console.log(reverseString("jimba"))

function capitalize(str) {
    result = str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
    return result;
}
console.log(capitalize('At the expense of your joy'))



function maxMin(arr) {
    if(arr.length === 0){
        return "Array is empty";
    }

    let max = arr[0];
    let min = arr[0];

    for(let i = 0; i < arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        } else if (arr[i]<min){
            min = arr[i];
        }
    }
    return `Maximum: ${max}, Minimum: ${min}`;
}

const nums = [19, 65, 100, 88, 99, 20, 35, 2];
console.log(maxMin(nums));

function sumArray (numArr) {
    var sum = 0;
    for(i = 0; i < numArr.length; ++i){
        sum += numArr[i];
    }
    return sum;
}

const number = [1,2,3,4,5,6,7,8,9];
console.log(sumArray(number));


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const evenNumber = array.filter(number => number % 2 === 0);

console.log (evenNumber)

function factorial(num){
    let total = 1;
    for(i = 1; i <= num; ++i){
        total = total * i;
    }
    return total;
}

console.log(factorial(5));

function prime(nums) {
    if(nums < 2){
        return false;
    }
    if(nums === 2) {
        return true;
    }
    for(let i = 2; i <= Math.sqrt(nums); i++){
        if(nums % i === 0){
            return false;
        }
    }
    return true;
}

function fibonacci(n){
    let sequence = [0, 1];
    while(sequence.length < n) {
        sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    }
    return sequence;
}

console.log(fibonacci(10))


function sevenBoom(arr) {
	if(arr.some(num => num.toString().includes('7'))) {
		return "Boom!";
	} else {
		return "there is no 7 in the array";
	};
}


// NESTED ARRAY
function getLength(arr) {
	let flatArray = arr.flat(Infinity);
	return flatArray.length;
}

function getLength(arr) {
	let count = 0;
	arr.forEach(item => {
		if (Array.isArray(item)) {
			count += getLength(item);
		} else {
			count++;
		}
	});
	return count;
}
    

function invert(s) {
	return s.split('').map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).reverse().join('');

}


function invert(s) {
  s = s.split("").reverse();
  for (var i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) s[i] = s[i].toLowerCase();
    else s[i] = s[i].toUpperCase();
  } return s.join("");
}





function nameflex(num) {
    return num ** 2;
}


const nameSquare = num => num ** 2;





function sevenBoom(arr) {
	if(arr.some(num => num.toString().includes('7'))) {
		return "Boom!";
	} else {
		return "there is no 7 in the array";
	};
}

const nums = [17, 37, 6, 8, 90, 17];
console.log(sevenBoom(num))

const person = [
    {
        name: 'jim',
        age: 20
    },
    {
        name: 'them',
        age: 50
    },
    {
        name: 'you',
        age: 30
    },
];

const result = person.some(value => value.age > 18);



console.log(result)

const number = [30, 20, 5, 8, 16, 30];

// const res = number.some(value => value >= 30);
const res = number.some(greater);
const inc = number.includes(5, 2);

function greater(num) {
    return num >= 30;
}

console.log(res)
console.log(inc)


function areYouPlayingBanjo(name) {
    // Implement me
    if(name.includes('R')||name.includes('r')){
      return `${name} plays banjo`;
    }else{
      return `${name} does not play banjo`;
    }
}

console.log(areYouPlayingBanjo('helloR'));


function invert(s) {
	return s.split("").reverse().join("");
}

let su = "The quick brown fox jumps over the lazy dog.";
let ar = su.split(" ").map(element => element.split("").reverse().join(""));
console.log(invert(su));
console.log(ar);


const valu = "Abdullahi";

function isIsogram(str){
    // Convert the string to lowercase to ignore case
    str = str.toLowerCase();
    
    // Compare the length of the string to the length of a Set created from the string
    // A Set in JavaScript is a collection of unique values
    return str.length === new Set(str).size;
}

//  OR 

function isIsogram(str){
    var i, j;
    str = str.toLowerCase();
    for(i = 0; i < str.length; ++i)
      for(j = i + 1; j < str.length; ++j)
        if(str[i] === str[j])
          return false;
    return true;
} 

function findNeedle(haystack) {
    // your code here
    haystack.map(element => {
      if(element === "needle") return `found the needle at the position ${indexOf("needle")}`;
    })
}


function countPositivesSumNegatives(input) {
    return input && input.length ?
  [input.filter(x => x > 0).length, input.filter(x => x < 0).reduce((a, b) => a + b, 0)]
  : [];
  
  
    // your code here
  //   let positive = 0;
  //   let negative = 0;
  //   for(let i = 0; i < input.length; i++){
  //     if(input[i] < 0){
  //       negative += input[i];
  //     }else if(input[i]>0){
  //       positive++;
  //     }
  //   }
  //   if(positive === 0 && negative === 0) return [];
  //     return [positive, negative];
  }


function countBy(x, n) {
    let z = [];
    for(let i = x; i < n; i+x){
      z.push([i]);
    }
    return z;
}

console.log(countBy(1, 10));


let student1 = {name:"John"}
let student2 = {name:"Mary"}
let newObject = {
 ...student1,
 ...student2,
 name: 'Daniel',
}

console.log(newObject);




function invert(s) {
	return s.split('').map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).reverse().join('');

}

function inverts(s) {
    s = s.split("").reverse();
    for (var i = 0; i < s.length; i++) {
      if (s[i] === s[i].toUpperCase()) s[i] = s[i].toLowerCase();
      else s[i] = s[i].toUpperCase();
      return s.join("");
    } 
}

function squareSum(numbers){
    let  sum = 0;
    for(let i = 0; i < numbers.length; i++){
       sum += numbers[i]**2;
    }
    return sum;
}

const data = [1,2,2,3];
const str = "A maN waS on His way to The chUrch"
const string = "HCRuHC EHt OT YAW SIh NO sAW nAM a"

console.log(squareSum(data));

console.log(inverts(str));
console.log(invert(string));

*/

const binSearch = (arr, item) => {
    if(arr.length % 2 === 0){
        if(arr.indexOf(arr.length / 2) !== item){
            let a = [];
            
        }
    }
}