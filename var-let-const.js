// const : আমরা আর কোন value assign করতে পারব না এবং একই নামে কোন varialbe declare করতে পারি না । 
const x = 2;
// const x = 3; can't declare
// x = 5;   can't reassign
console.log(x);

// let :  আমরা চাইলে value assign করে দিতে পারি কিন্তু একই নামে কোন variable declare করতে পারি না । 
let y = 3;
y = 5;
// let y = 7; can't declare
console.log(y);
console.log(y);

// var :  আমরা চাইলে value assign করতে পারি এবং একই নামে একাধিক variable declare করতে পারি । 
var z = 5;
var z = 6;
console.log(z);
console.log(z);
console.log('\n\n');

// Block Scope : Block scope হল এমন একটা scope যেখানে আমরা যদি একটা function or loop এর মধ্যে একটা variable declare করি তাহলে শুধু মাত্র সেই function or loop এর মধ্যে কাজ করবে । JS এ block scope  নেই ।  '{'=> starting a new block, '}' => ending a block scope

// তাই  for instance example in java
// public class Example(){
//     public void processArray(String[] array){
//         for(int i=0; i < array.length; i++){
//             System.out.println(array[i]);
//         }
//     System.out.println("I can not use the variable i here");
//     }
// }

// function scope : আমরা যদি function এর মধ্যে variable declare করে থাকি তাহলে আমরা সেটাকে যে কোন জায়গা থেকে ব্যাবহার করতে পারি । 
/*
function func_name(array){
    for(var i = 0; i < array.length; i++){
        console.log('Element' , array[i]);
    }
    console.log('I can use variable i outside the loop', i);
}

*/

// using var
function printMatrix(matrix){
    for(var i = 0; i < matrix.length; i++){
        var line = matrix[i];
        // console.log(line.length);
        for(var i = 0; i < line.length; i++){ // overwriting the variable value
            var element = line[i];
            console.log(element);
            // output : 1, 2, 3
        }
    }
}

var matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
printMatrix(matrix);
// console.log(matrix.length);
console.log('\n\n');


// const or let using
function printMatrix1(matrix){
    for(let i = 0; i < matrix.length; i++){
        const line = matrix[i];
        // console.log(line.length);
        for(let i = 0; i < line.length; i++){
            const element = line[i];
            console.log(element);
            // output : 1,2,3,4,5,6,7,8,9
        }
    }
}

const matrix1 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
printMatrix1(matrix1);

// In Javascript, it doesn’t matter how many times you use the keyword “var”. If it’s the same name in the same function, you are pointing to the same variable.

// So, var keyword ব্যাবহার করলে আমাদের value গুলো overwriting হয়ে যাই । তাই আমরা js এ var keyword use করব না সব জায়গায়। 