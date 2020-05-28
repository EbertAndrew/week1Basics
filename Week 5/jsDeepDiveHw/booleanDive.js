var mybool = true;
var result  ;

result = mybool.toString();
console.log(mybool);
console.log(result);

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

// function

function makeChange(x){
  if(x == true){
      x = false;
      console.log(x);
  }else if(x == false){
      x = true;
      console.log(x)
  }
}
var money = true;
makeChange(money);
money = false;
makeChange(money);
makeChange(money);

// object

var house = {
  "doors" : true,
  "windows" : true,
  "crawlspace" : false
};