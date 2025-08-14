let person ={
    name :"vijay",
    age :"27",
    ismale :true
};
person.city="Mubai";
delete person.city;
person.age=26;


let car = new Object();
car.brand="Lamborgine";
car.model="Lunos";



function details (hieght , weight){
this.hieght = hieght;
this.weight =weight;
}
 let user = new details(6,75);
console.log(person.name);
console.log(person.city);
console.log(person["age"]);
console.log(car);
console.log(user);