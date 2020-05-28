var overallObj = {
    name: "Ramone", // String Variable
    age: 18, // Number
    married: false, // Boolean
    dob: new Date() // Date
};

function generIC(word, num, bool, day){
    console.log(word + day + num + bool);
}

for(var i = 0; i < 10; i++){
    generIC("rMONE", 4, true , new Date());
    generIC(overallObj.name, overallObj.age, overallObj.married, overallObj.dob);
}

overallObj.name = "Randolph Jones";
generIC(overallObj.name, overallObj.age, overallObj.married, overallObj.dob);