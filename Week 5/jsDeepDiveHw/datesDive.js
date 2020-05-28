var today = new Date();

var day = today.getDate();
console.log(day);
var month = today.getMonth() +1;
console.log(month);

// loop function object

var now = new Date();
var daysOfYear = [];
for (var d = new Date(2020, 0, 1); d <= now; d.setDate(d.getDate() + 1)) {
    daysOfYear.push(new Date(d));
}
