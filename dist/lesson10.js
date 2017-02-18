var getPercent = function () { return 1; };
var getBonus = function (value, tax, salary) {
    if (value === void 0) { value = 10; }
    if (tax === void 0) { tax = value * .1; }
    if (salary === void 0) { salary = getPercent(); }
    console.log(value + tax - salary);
    console.log(arguments.length);
};
getBonus();
getBonus(undefined, 30);
getBonus(20, 10, 10);
//# sourceMappingURL=lesson10.js.map