let input = document.getElementById("input");

function calculate(number) {
    input.value+=number;
}

function delet() {
    input.value = input.value.slice(0 , -1);
}

function result() {
    try {
        input.value = eval(input.value);
    }
    catch(err) {
        input.value = "enter a valid expression";
    }
}

function clearDisplay() {
    input.value = "";
}

function add() {
    return a+b;
}
function minu() {
    return a-b;
}
function mul() {
    return a*b;
}
function div() {
    return a/b;
}