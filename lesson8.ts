var calculateSalary = function () {
    return 100000;
}

let calculateSalaryArrow = (bonus: number, tax: number) => 200000 + bonus - tax;
console.log(calculateSalaryArrow(10000, 1200));
