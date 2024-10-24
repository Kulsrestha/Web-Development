let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2024, 0, 1);
// console.log(myCreatedDate.toDateString());
// let myCreatedTime = new Date(2024, 0, 1, 5, 55);
// console.log(myCreatedTime.toTimeString());
// let customDate1 = new Date("2024-09-21");
// console.log(customDate1.toLocaleDateString());
// let customDate2 = new Date("09-01-2024");
// console.log(customDate2.toLocaleDateString());
// let customDate3 = new Date("01-09-2024");
// console.log(customDate3.toLocaleDateString());


let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));


