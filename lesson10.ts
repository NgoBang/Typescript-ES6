let getPercent = ()=> 1;
var getBonus = function (value = 10, tax = value*.1, salary=getPercent()) {
    console.log(value + tax-salary);
    console.log(arguments.length);
    
}
getBonus();
getBonus(undefined, 30);
getBonus(20,10,10);