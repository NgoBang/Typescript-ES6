var isDone = false;
console.log(isDone);
var decimal = 6;
console.log(decimal);
var color = "blue";
console.log(color);
var ageNumber = 10;
var fullName = 'TEDU';
var sentence = "\nHello, my name is " + fullName + ".\nAge is " + (ageNumber + 1);
console.log(sentence);
var list = [1, 2, 3];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Red;
console.log(c);
//# sourceMappingURL=lesson7.js.map