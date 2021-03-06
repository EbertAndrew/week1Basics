// Create 10 variables. All have to have different values.
// Once you have created the variables, create on last variable with all the variables added together.
// HINT: use the + sign to add variables together.

// Global Variables - variables all by themselves
// Not inside a scope or block : { <-- scope/block -->}
var someGuy = " John ";

var dayOfParty = 23 ;

var lastGlobal = " Just Relax ";

// Local Variables - variables belong to something
// Inside a scope/block : { var a = 1; }

function simple(){
    var a = 1; // Local Variable
}
for(var i = 0;i < 10; i++){
    console.log(i);
}

var redGreen;

var apple$auce;

var name = "ReBeLiOuS"

var _landslide = true

// Below is an example of using a variable to access a property.
var someProp = "propName";

var myObj = {
    propName: "Some Value"
}
myObj[someProp]; // "Some Value"

var foo = "foo";

function bob(){
    var foo = "foo2";
    console.log(foo);
}
bob();

console.log(foo);

var myName = 'Andrew';
var myLastName = 'Ebert';

alert(myName + ' ' + myLastName);

// Variable hoisting below. JS recognizes it but the var is out of place, BASICALLY. Video solution said to instead use LET/CONST to define variables(?)

// Above comment as an issue

var DEFAULT_RATE = 0.1;
var rate = 0.05;

function getRate()  {
    if (!rate) {
        var rate = DEFAULT_RATE;
    }

    return rate;
}

console.log('Your rate is: ', getRate());