function isOdd(number){
    return (number % 2) == 1;
}
console.log(isOdd(3))

function isEven(number){
    return (number % 2) == 0;
}
console.log(isEven(2))

function identity(input){
    return input
}
console.log(identity(4));

function isFive(input){
    return input === 5;
}
console.log(isFive(5));

function addFive(input){
    return (input + 5);
}
console.log(addFive(3));

function isMultipleOfThree(input){
    return (input % 3) === 0;
}
console.log(isMultipleOfThree(9));
console.log(isMultipleOfThree(10));

function isMultipleOfThreeAndFive(input){
    return (input % 3) && (input % 5) === 0;
}
console.log(isMultipleOfThreeAndFive(15));
console.log(isMultipleOfThreeAndFive(17));

function isMultipleOf(target, n){
    return (target % 3) === 0
}
console.log(isMultipleOfThree(4, 3));
console.log(isMultipleOfThree(9, 3));

function isTrue(boolean){
    return (boolean > 1)
}
console.log(isTrue(0));
console.log(isTrue(5));

function isFalse(boolean){
    return (boolean > 1)
}
console.log(isFalse(0));
console.log(isFalse(5));

function isTruthy(input){

}

