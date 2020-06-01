var x = null;
var y;
var z = NaN;

function testThis(something){
    if(something == null){
        console.log("I ride the waves in the sand");
    }
    else if(something == undefined){
        console.log("I ride the waves in the grass");
    }
    else if( isNaN(something)){
        console.log("I ride the waves in the dirt");
    }
    else{
        console.log("I ride the waves in the water");
    }
}
testThis(x);
testThis(y);
testThis(z);
testThis("Ramone");
testThis(786);
console.log();