var name = "Supercalifrajalisticexpalidocious";
var result;

var overallObj = {
    name: "Supercalifrajalisticexpalidocious", // String Variable
    significance: 99, // Number
    sad: false, // Boolean
    when: new Date() // Date
};

function generIC(word, num, bool, day){
    console.log(word + num + bool + day);
}

for(var i = 0; i < 10; i++){
    generIC(overallObj.name, overallObj.significance, overallObj.sad, overallObj.when);
}