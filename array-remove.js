
// *********** Array.pop() *******************
// Syntax : pop();
const plants = ['broccoli', 'cauliflower','cabbage', 'kale', 'tomato'];
// pop() method removes the last element from an array and returns that element
console.log(plants.pop());// expected output : 'tomato'
console.log(plants);// expected output : Array['broccoli','cauliflower','cabbage','kale']
plants.pop();
console.log(plants);// expected output : Array['broccoli', 'cauliflower','cabbage']
// return undefined if the array is empty

// *********** Array.shift() *****************
// Syntax :shift()
// shift() method removes the first element from an array and returns that remvoed element. its change the length of array

const array1 = [1,2,3];
const firstElement = array1.shift;
console.log(array1);// expected output : Array[2,3]
console.log(firstElement); // expected output : 1








// ********** Array.push() *****************
/**
 * Syntax
 * push(element0)
 * push(element0, element1,.....)
 */
// push() method adds one or more elements to the end of an array and returns the new length of the array
const animals = ['pigs','goats','sheep'];
const count = animals.push('cows');
console.log(count); // expected output : 4
console.log(animals); // expected output : Array['pigs','goats','sheep','cows']
animals.push('chickens','cats','dogs');
console.log(animals);   // expected output : Array['pigs','goats','sheep','cows','chickens','cats','dogs']

// ************* Array.splice() **************
/**
 * Syntax :
 * splice(start)
 * splice(start,deleteCount)
 * splice(start,deleteCount,item1, ....)
 */
// removing or preplacing existing elements and/or adding new elements in place
const months = ['jan','march','april','june'];
months.splice(1,0,'feb');   // inserts at index 1
console.log(months); // expected output : Array['jan','feb','march','april','june']

months.splice(4,1,'may');   // replaces 1 element at index 4
console.log(months); //expected output : Array['jan','feb','march','april','may']