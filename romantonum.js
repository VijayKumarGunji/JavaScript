const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

function getNumberFromRoman(str){
    let total = 0;
    for (let index = 0; index < str.length; index++) {
        let curr = map[str[index]];
        let next = map[str[index + 1]];
        if (next && curr < next) {
            total += (next - curr);
            index++; // skip the next character
        } else {
            total += curr;
        }
    }
    return total;
}

console.log(map.I);;
console.log(map["I"]);

console.log(getNumberFromRoman("IVI"));

function reverseString(str){
    let reverseStr = "";
    for (let index = str.length - 1; index >= 0; index--) {
        reverseStr += str[index];
    }
    return reverseStr;
}

console.log(reverseString("Aneel"));


  let num =prompt("enter any value") ;
   num=Number(num);
   if(isNaN(num)){
    console.log("please enter a valid number");
   }
   else if(num % 2===0){
     console.log(num+ "number is even");
   }
   else{
    console.log(num+ "The number is odd")
   }
