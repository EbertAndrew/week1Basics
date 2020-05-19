function addGlobalToLocal(x,y){
    
    return x + y;
}
console.log(addGlobalToLocal(5,4));
console.log(addGlobalToLocal(2,10));
console.log(addGlobalToLocal(3,7));

function testArray(n){
    var myArray = new Array(n);
    console.log(myArray);
}
testArray(5)

var obj = {
    a: 1,
    b: 2
};
var obj2 = {
    c: 6
};
var obj3 = {
    d: new obj(),
    e: new obj2()
};