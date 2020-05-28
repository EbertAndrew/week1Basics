var name = "Supercalifrajalisticexpalidocious";
var result;

result = name.length;
console.log(result);

// function

var func = "function (a, b) { return a + b; }".parseFunction();

// object

var nameOfThang = 'Person';
var nameOfThingzName = 'The Dude';

var thangs = { Person: {name: 'Legowski'}, Cars: {} };
var person  = new (eval(thangs[nameOfThang].constructor))();
person.name = new (eval(thangs.Person.name.constructor))(nameOfThingzName) .toString();

console.log('@thang, #Person', person);

// loop

for(var i = 0 ; i < 10 ; i++){
    var carStuck = true;
    if(carStuck == true){
        console.log("you're stuck");
        carStuck = false;
    }
    else{
        console.log("drive faster");
        carStuck = true;
    }
  }