let arr1: string[] = ['Hello', 'World'];
let arr2: number[] = [1, 2, 3, 4, 5];
let arrAny: any[] = ['Bang', 10, true];

let arr3: Array<string> = ['TEDU', 'Online'];
console.log(arr1[0]);

//tuple
let student: [string, number, boolean];
student = ['Nguyen Van A', 20, true];
student[0] = 'Ha noi';
student[2] = true;
student[3] = 'Ahihi';
