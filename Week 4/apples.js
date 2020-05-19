function newApple(color, ripe, type){
    this.color = color;
    this.ripe = ripe;
    this.type = type;
}
// simple way of creating an object
var apple = {
    color : "red",
    ripe : true,
    type : "granny smith" 
}
// Using the object constructor
var appleTree = {
    apples = newApple("red",false,"fuji")
}

// Adding a property to an object
apple.weight = .33;
apple.parent = "apple Tree";
console.log(apple);

// Deleting a property from an object
delete apple.parent;
console.log(apple);