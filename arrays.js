
//Push
//Adds one or more elements to the end of an array and returns the new length of the array.
var arr = [1,2,3];
arr.push(4,5);

console.log(arr);
//Pop
// Removes the last element from an array and returns that element.
var fruits = ["banana","apple","graph"];
var removedelement = fruits.pop();
console.log(removedelement);
//shift
//Removes the first element from an array and returns that element.
var numbers =[6,7,8,9];
var shifted =numbers.shift();
console.log(shifted);
console.log(numbers);
//unshift
//Adds one or more elements beginig of the array and returns length of the array
var unshifted =[2,3];
 unshifted.unshift(0,1);
console.log(unshifted);
//concat
// method is used to join (merge) two or more arrays into a new array.
var concat1 =[2,3];
var concat2 =[4,5];
var newconcat = concat1.concat(concat2);
console.log(newconcat);
//slice
//method is used to extract a portion of an array into a new array.
var slicearr =[1,2,3,4,5,6];
var newslice = slicearr.slice(1.2);
console.log(newslice);
//splice
//method is used to add, remove, or replace elements in an array.
var fruits =["banana","apple","mango"]
    fruits.splice(2);
    console.log(fruits);
var numbers = [1, 2, 3, 4];
numbers.splice(1, 2, 99, 100); 
console.log(numbers); 
//foreach
// method executes a given function once for each array element.
let foreacarry =[1,2,3];
 foreacarry.forEach(Element => console.log(Element * 2));
 // map()
 // method creates a new array by applying a function to each element of the original array.
 let num = [1, 2, 3, 4];
let doubled = num.map(numb => numb * 2);

 console.log(doubled);
 //filter
 //method creates a new array containing only elements that pass a condition (test).
 var fil = [2,3,4,5,6]
 var newfil = fil.filter(Element => Element % 2===0);
 console.log(newfil);
 //find
 //method returns the first element in an array that matches a condition.
var arrfound = [50, 12, 80, 130, 44];
var found = arrfound.find(Element => Element > 10);
console.log(found);
//findindex
//method searches an array and returns the index of the first element that satisfies a condition (test).
let arrfindindex =[5, 12, 8, 130, 44];
let newfindindex = arrfindindex.findIndex(Element => Element >10);
console.log(newfindindex);
//every
//The every() method checks whether all elements in an array satisfy a given condition.
let everyArray =[30,40,50,60];
let allover20 = everyArray.every(Element => Element > 20);
console.log(allover20);
console.log(allover20);
console.log(allover20);
console.log(allover20);
//some
//The some() method checks if at least one element in an array passes the given condition.
let someArray =[20,30,40,50,60];
let newsome = someArray.some(Element => Element > 20);
console.log(newsome);
//include
// The includes() method checks whether an array contains a specific value.
let includarray =[1,2,3,4];
let includetwo =includarray.includes(2);
console.log(includetwo);
//indexof
//The indexOf() method returns the first index of a given element in an array.
let arr1 = [2, 9, 9];
let index = arr1.indexOf(9);
console.log(index); 
//reduce
//The reduce() method executes a reducer function on each element of the array to reduce it to a single value.
let Arr2 = [1,2,3,4,5,6];
let reduc = Arr2.reduce((acc,cur) => acc + cur);
console.log(reduc);
//reduceright
//The reduceRight() method works just like reduce(), but it processes the array from right-to-left instead of left-to-right.
let arr3 = ['a', 'b', 'c', 'd'];
let concat = arr3.reduceRight((acc, curr) => acc + curr);
console.log(concat);
//join
//The join() method converts all elements of an array into a single string, separated by a separator (default is a comma ,).
let arrayjoin =["Hello","World"];
let str =arrayjoin.join(" ");
console.log(str);
//reverse()
// Reverses the elements of an array in place
var arrayreverse =[2,3,4];
    arrayreverse.reverse();
    console.log(arrayreverse);
    console.log(arrayreverse);
    console.log(arrayreverse);

//toString()
//The toString() method converts an array (or object) into a string.
var arraytostring =[7,8,9,6];
var newstr =arraytostring.toString();
console.log(newstr);
//length  
//The length property returns the number of elements in an array or the number of characters in a string.
var cities =["hyderabad","bangalore","chennai","mumbai"];
console.log(cities.length);
//isarray
//Determines whether the passed value is an Array.
const arris =[1,2,3];
console.log(Array.isArray(arris));