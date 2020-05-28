// Object
var enomaDoor = {
  material: "Cedar",
  color: "brown",
  type: "wood",
  vintage ? : true,
  knocker ? : true,
  size: 10,
  brand: undefined
}
console.log(enomaDoor); 
console.log(enomaDoor.brand); enomaShoe.brand = "enoma"; 
console.log("...... Loading ......") 
console.log(enomaDoor)

// Function
function bark(name,weight){
  if ( weight > 20 ){
      console.log(name + " says WOOF WOOF ");
  }else{
      console.log(name + " says woof woof ");
  }
}
var name;
var weight;
bark("rover",23);
name = "rover";
weight = 23;

// Loop
var i;
for (i = 0; i < cars.length; i++) { 
  text += cars[i] + "<br>";
} 