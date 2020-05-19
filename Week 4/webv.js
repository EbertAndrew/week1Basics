var car = {
    mileage: 12000,
    year: 1959
}
var car2 = {
    mileage : 5000,
    year : 1955
}

var oldSchool = car2;

function prequalCar(someCar){
    if (someCar.mileage > 10000){
        return false;
    }else if ( someCar.year > 1960){
        return false;
    }
    return true;
}

console.log(prequalCar(car));
console.log(prequalCar(car2));


function addName(anyObj){
    anyObj.name = "dodge";
    console.log(anyObj);
}

addName(car);
addName(car2);

function changeName(any, name){
    any.name = name;
}

changeName(car, "lambo");
changeName(car2, "VW BEETLE");
