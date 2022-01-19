var kaleb = 'Kaleb';
const states = 50;
var y = 5;
var z = 4;
var x = y + z;
// var x is the addition of the variable y and z.
function sayHello(){

    console.log('Hello World');

}
sayHello()

function checkAge(name,age){
    if (age < 21)
    console.log("Sorry " + name + ", you aren't old enough to view this page!");

}
checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);

var veg = ['tomato', 'cucumber', 'avocado', 'potato', 'mushroom'];

for (var i = 0; i < veg.length ;i++){
    
    console.log(veg[i]);
}

var pet = {
    name: 'peach' ,
    breed: 'Doberman'
}
console.log(pet);

const arr =  [
    {
     first_name: 'Mary',
      age: 17
    }, 
    {
     first_name: 'Jack',
     age: 22
    }, 
    {
     first_name: 'Matt',
     age: 19
    }, 
    {
     first_name: 'Ashley',
     age: 24
    }, 
    {
     first_name: 'John',
     age: 20
    },
]


for (let j=0; j<arr.length; j++){

    console.log(checkAge(arr[j].first_name, arr[j].age))
    
}

function getLength(string){

let j = string.length
if (j%2 == 0){
    console.log('The world is nice and even')
  }  else{
    console.log('The world is an odd place ')
}
}

getLength('Hello World');