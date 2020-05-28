var myNumber = 456;

var result;

result = myNumber.toString();

console.log(result);

// loop

for(var i = 0 ; i < 70 ; i++){
    var carStuck = 45;
    if(carStuck == i){
        console.log("you're slow");
        carStuck = 50;
    }
    else{
        console.log("drive faster");
        carStuck = 45;
    }
  }
  
  // function
  
  function makeChange(x){
    if(x == 20){
        x = 10;
        console.log(x);
    }else if(x == 10){
        x = 10;
        console.log(x)
    }
  }
  var money = 20;
  makeChange(money);
  money = 15;
  makeChange(money);
  makeChange(money);
  
  // object
  
  var house = {
    "doors" : 5,
    "windows" : 40,
    "crawlspace" : 1
  };